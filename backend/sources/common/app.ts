import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';
import { Server } from 'http';
import { Socket } from 'socket.io';
import chalk from 'chalk';
import IController from '@common/interfaces/controller';
import Logger from '@common/utils/logger';
import rabbitmq from '@common/rabbitmq';
import ConsoleProxyHandler from '@common/services/console.proxy';
import ErrorFactoryHandler from '@common/middlewares/error.middleware';
import CorsCustomOptions from '@common/configs/cors.config';
import socketIO from '@common/socket';
import IEvent from '@common/interfaces/event';
import mimes from '@common/constants/mimes';
import AppError from '@common/services/errors/app.error';
import credentials from '@common/middlewares/credential.middleware';
import redis from './redis';
import cloudinary from './cloudinary';
import { ConfigOptions } from 'cloudinary';

dotenv.config({ path: './.env.local' });

type MongoConnection = {
    uri: string;
    options?: mongoose.ConnectOptions;
};

type RabbitMQConnection = {
    uri: string;
};

type RedisConnection = {
    uri: string;
}

type ApplicationOptions = {
    controllers: IController[];
    events: IEvent[];
    mongoConnection: MongoConnection;
    rabbitMQConnection: RabbitMQConnection;
    redisConnection: RedisConnection;
    cloudinaryConnection: ConfigOptions;
};

class Application {
    private app: express.Application;
    private appName: string;
    private appVersion: string;

    private controllers: IController[] = [];
    private events: IEvent[] = [];

    private mongoConnection: MongoConnection;
    private rabbitMQConnection: RabbitMQConnection;
    private redisConnection: RedisConnection;
    private cloudinaryConnection: ConfigOptions;

    private rabbitRetry: number = 5;

    constructor(options: ApplicationOptions) {
        this.app = express();
        
        this.controllers = options.controllers;
        this.events = options.events;

        this.redisConnection = options.redisConnection;
        this.mongoConnection = options.mongoConnection;
        this.rabbitMQConnection = options.rabbitMQConnection;
        this.cloudinaryConnection = options.cloudinaryConnection;

        this.appName = `[${process.env.APP_NAME}]`;
        this.appVersion = `${process.env.APP_VERSION}`;

        console = new Proxy(console, new ConsoleProxyHandler());

        this.redisConnect(this.redisConnection.uri);
        this.mongoDBConnect(this.mongoConnection.uri, this.mongoConnection.options);
        
        this.setup();
    }

    public application() {
        return this.app;
    }

    private setup() {
        console.log(chalk.yellow('Setting up server...'));

        this.app.use(cors(CorsCustomOptions));
        this.app.use(cloudinary.config(this.cloudinaryConnection));
        this.app.use(credentials);

        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());

        this.app.use(
            morgan(
                `${chalk.blue(this.appName)}${chalk.yellow('[:date]')} ${chalk.green(':method')} ${chalk.cyan(
                    ':status'
                )} ${chalk.white(':url')} :res[content-length] - :response-time ms`
            )
        );

        this.app.use(
            morgan(`${this.appName}[:date] :method :status :url :res[content-length] - :response-time ms`, {
                stream: new Logger('./logs/access.log').createWritableStream(),
            })
        );

        this.controllers.forEach((controller) => {
            this.app.use(`/${this.appVersion}${controller.path}`, controller.router);
        });

        this.app.get('/status', (req, res) => {
            return res.json({ status: '200 - OK', message: 'Server is running ...' });
        });

        this.app.all('*', (req, res, next) => {
            const file = path.join(__dirname, req.path);
            const type: string = mimes[path.extname(file).slice(1)];

            if (type) {
                const s = fs.createReadStream(file);

                s.on('open', () => {
                    res.set('Content-Type', type);
                    s.pipe(res);
                });

                s.on('error', () => {
                    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
                });
            } else {
                next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
            }
        });

        this.app.use(ErrorFactoryHandler);
    }

    private mongoDBConnect(uri: string, options: mongoose.ConnectOptions = {}): void {
        mongoose
            .connect(uri, options)
            .then(() => {
                console.log(chalk.green('Connected to database successfully'));
            })
            .catch((error) => {
                console.error('Could not connect to the database', error);
            });
    }

    private redisConnect(uri: string) {
        redis.connect(uri)
        .then(() => {
            console.log(chalk.green('Connected to redis successfully'));
        })
        .catch((error) => {
            console.error('Could not connect to the redis', error);
        });
    } 

    private rabbitMQReconnect() {
        setTimeout(() => this.rabbitMQConnect(this.rabbitMQConnection.uri), 3000);
    }
    
    private async rabbitMQConnect(uri: string) {
        try {
            const connection = await rabbitmq.connect(uri);
            
            connection.on('error', (error) => {
                console.error('connection to RabbitQM error! Retry to reconnect');
                this.rabbitMQReconnect();
            });
            
            connection.on('close',  () => {
                console.error('connection to RabbitQM closed! Retry to reconnect');
                this.rabbitMQReconnect();
            });
            
            console.log(chalk.green('Connected to rabbit mq successfully'));
        } catch (error: any) {
            if (this.rabbitRetry) {
                console.error('Could not connect to the rabbit mq. Retry to reconnect');
                this.rabbitMQReconnect();

                this.rabbitRetry--;
            }
            else {
                console.error('Could not connect to the rabbit mq.', error);
            }
        }
    }

    public run(callback: () => void = () => {}): Server {
        console.log(chalk.blue('Server is starting...'));

        const availablePort = process.env.APP_PORT ?? 3000;

        const server: Server = this.app.listen(availablePort, async () => {
            console.log(chalk.green(`Server is running on port ${chalk.cyan(availablePort)}`));

            socketIO.init(server);
            await this.rabbitMQConnect(this.rabbitMQConnection.uri);

            const io = socketIO.getIO();

            io.on('connection', (socket: Socket) => {
                console.log('Client connected!');

                this.events.forEach((event) => {
                    socket.on(event.event, (...args: any[]) => event.listener(io, socket, ...args));
                });
            });

            callback();
        });

        return server;
    }
}

export default Application;


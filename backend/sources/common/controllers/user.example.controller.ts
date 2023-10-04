import mongoose from 'mongoose';
import { NextFunction, Request, Response, Router } from 'express';
import IController from '@common/interfaces/controller';
import UserModel from '@common/models/user.example.model';
import catchAsync from '@common/utils/catch.error';
import DTOValidation from '@common/middlewares/validation.middleware';
import UserDTO from '@common/dtos/user.example.dto';
import Jwt, { JsonWebToken } from '@common/utils/jwt';
import GMailer from '@common/services/mailer.builder';
import cacheMiddleware from '@common/middlewares/cache.middleware';
import redis from '@common/redis';
import MulterCloudinaryUploader from '@common/multer';

class UserController implements IController {
    readonly path: string = '/user';
    readonly router: Router = Router();

    public static profileCacheKey(req: Request): string {
        return `profile?id=${req.params.id}`;
    }

    constructor() {
        // dto example
        this.router.post('/', DTOValidation.validate<UserDTO>(UserDTO), catchAsync(this.createUser));

        // extract 1 param example
        this.router.param('id', DTOValidation.extractParams(['id']));
        
        // cache example
        this.router.get('/:id', cacheMiddleware(UserController.profileCacheKey), catchAsync(this.getUser));
        
        // extract params example
        this.router.get('/details/:id/:idx', DTOValidation.extractParams(['id', 'idx']), catchAsync(this.getUser));
        
        // upload file example
        const multercloud = new MulterCloudinaryUploader(['jpg', 'jpeg', 'png', 'gif'], 5 * 1024 * 1024);
        this.router.post('/upload', multercloud.single('image'), multercloud.uploadCloud('uploads'), catchAsync(this.uploadFile));
    }

    private async createUser(req: Request, res: Response, next: NextFunction) {
        // test dto validation.
        const userInfo = req.body as UserDTO;
        console.log(userInfo);

        // c1
        // test jwt.
        console.log("C1----------------------------------------------------------------")
        const jwt = new JsonWebToken('this is my secret key');
        
        const token = await jwt.createToken(userInfo, { expiresIn: process.env.JWT_REFRESH_EXPIRES });
        console.log(token);
        
        const payload = await jwt.verifyToken(token);
        console.log(payload);

        // c2
        console.log("C2----------------------------------------------------------------")
        
        const token2 = await Jwt.createToken(userInfo, { expiresIn: process.env.JWT_REFRESH_EXPIRES });
        console.log(token2);
        
        const payload2 = await Jwt.verifyToken(token2);
        console.log(payload2);

        // sendmail example
        await GMailer.sendMail({
            to: 't3pmal@gmail.com',
            subject: 'Test send mail',
            html: '<h1>Hello World!</h1>',
        });

        // test error handler.
        const users = await UserModel.create({
            name: 'John Doe',
            email: 'test@example.com',
        });

        return res.status(200).json(users);
    }

    private async getUser(req: Request, res: Response, next: NextFunction) {
        // test extract params
        console.log(req.body.id);
        console.log(req.body.idx);

        req.user = {
            _id: new mongoose.Types.ObjectId(123123),
            firstname: '123',
            lastname: '123',
            password: '123',
            email: '123',
        };

        // cache
        const redisClient = redis.getClient();
        await redisClient?.setEx(UserController.profileCacheKey(req), Number(process.env.REDIS_CACHE_EXPIRES), JSON.stringify(req.user));
            
        return res.status(200).json({ message: req.user });
    }

    private async uploadFile(req: Request, res: Response, next: NextFunction) {
        // test multer
        console.log(req.file);
        console.log(req.cloudinaryResult);

        return res.status(200).json({ message: 'ok' });
    }
}

export default new UserController();

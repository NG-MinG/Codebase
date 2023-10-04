import amqplib, { Channel, Connection, Message } from 'amqplib';

class RabbitMQ {
    private static rabbitmq?: RabbitMQ;
    private channel: Channel | null;

    private constructor() {
        this.channel = null;
    }

    public async connect(uri: string) {
        try {
            
            const conn: Connection = await amqplib.connect(uri);
            this.channel = await conn.createChannel();

            return conn;

        } catch (error: any) {
            throw error;
        }
    }

    public static getInstance(): RabbitMQ {
        return this.rabbitmq ?? (this.rabbitmq = new this());
    }

    public ack(message: Message) {
        this.channel?.ack(message);
    }

    public async publish(queue: string, message: string) {
        await this.channel?.assertQueue(queue);
        this.channel?.sendToQueue(queue, Buffer.from(message));
    }

    public async consume(queue: string, ack: boolean = true, callback: (message: string) => void = (message) => {}) {
        await this.channel?.assertQueue(queue);
        this.channel?.consume(queue, (message) => {
            if (message) {
                callback(message.content.toString());
                if (ack) this.channel?.ack(message);
            }
        });
    }

    public async close() {
        await this.channel?.close();
    }
}

const rabbitmq = RabbitMQ.getInstance();

export default rabbitmq;


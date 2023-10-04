import mongoose from "mongoose";
import { Server, Socket } from "socket.io";
import IEvent from "@common/interfaces/event";

class ConnectEvent implements IEvent {
    public readonly event: string = 'connect';
    public readonly listener: (io: Server, socket: Socket, ...args: any[]) => void;

    constructor() {
        this.listener = this.onConnect;
    }

    private async onConnect(io: Server, socket: Socket, message: string) {
        socket.user = {
            _id: new mongoose.Types.ObjectId(123123),
            firstname: '123',
            lastname: '123',
            password: '123',
            email: '123',
        };

        io.socket_list.push(socket);
    }
}

export default new ConnectEvent();
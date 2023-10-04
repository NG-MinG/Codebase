import { Server, Socket } from "socket.io";
import IEvent from "@common/interfaces/event";

class DisconnectEvent implements IEvent {
    public readonly event: string = 'disconnect';
    public readonly listener: (io: Server, socket: Socket, ...args: any[]) => void;

    constructor() {
        this.listener = this.onDisconnect;
    }

    private async onDisconnect(io: Server, socket: Socket, message: string) {
        console.log('Client disconnected!');
    }
}

export default new DisconnectEvent();
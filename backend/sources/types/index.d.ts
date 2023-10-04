import { IUser } from '@common/models/user.example.model';
import { UploadApiResponse } from 'cloudinary';

declare global {
    namespace Express {
        export interface Request {
			//example
            user: IUser;
            cloudinaryResult: UploadApiResponse;
        }
    }
}

declare module 'socket.io' {
    interface Socket {
		//example
        user: IUser;
    }
	interface Server {
		//example
        socket_list: Socket[];
    }
}

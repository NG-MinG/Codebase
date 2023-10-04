import IError from '@common/interfaces/error';
import AppError from '@common/services/errors/app.error';

class ErrorFactory implements IError {
    protected error: any;

    constructor(error: any) {
        this.error = error;

        this.error.statusCode = this.error.statusCode || 500;
        this.error.status = this.error.status || 'error';
    }

    public createError(): AppError {
        return new AppError(this.error.message, this.error.statusCode);
    }

    public handler(callback: (err_res: any) => void): void {
        const error = this.createError();

        const err_response: any = {
            status: error.isOperational ? error.status : 'error',
            statusCode: error.isOperational ? error.statusCode : 500,
            message: error.isOperational ? error.message : 'Something went wrong!',
        };

        if (process.env.NODE_ENV === 'development') {
            err_response.statusCode = error.statusCode;
            err_response.message = error.message;
            err_response.stack = error.stack;

            console.error(error);
        }

        callback(err_response);
    }
}

export default ErrorFactory;

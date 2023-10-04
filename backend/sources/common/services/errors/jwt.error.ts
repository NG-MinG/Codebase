import ErrorFactory from "@common/services/error.factory";
import AppError from "@common/services/errors/app.error";

export class JWTError extends ErrorFactory {
    public createError() {
        return new AppError('Invalid token. Please log in again!', 401);
    }
}

export class JWTExpiredError extends ErrorFactory {
    public createError() {
        return new AppError('Your token has expired! Please log in again.', 401);
    }
}
import AppError from "@common/services/errors/app.error";

interface IError {
    createError(): AppError;
}

export default IError;
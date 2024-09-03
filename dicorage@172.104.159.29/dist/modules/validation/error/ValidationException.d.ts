import { HttpException } from "@nestjs/common";
export declare class UserAlreadyExistsException extends HttpException {
    name: "UserAlreadyExistsException";
}
export declare class UserNotFoundException extends HttpException {
    name: "UserNotFoundException";
}
export declare class OmnixConnectionException extends HttpException {
    name: "OmnixConnectionException";
}

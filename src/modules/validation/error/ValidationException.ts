/*eslint-disable */

import { HttpException } from "@nestjs/common";

export class UserAlreadyExistsException extends HttpException {
    name: "UserAlreadyExistsException";
}

export class UserNotFoundException extends HttpException {
    name: "UserNotFoundException";
}
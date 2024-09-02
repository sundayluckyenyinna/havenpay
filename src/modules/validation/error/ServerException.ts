/*eslint-dsiable */

import { HttpException } from "@nestjs/common";

export class ServerApiException extends HttpException {
    name: "ServerApiException";
    exception: any;
}
import { HttpException } from "@nestjs/common";
export declare class ServerApiException extends HttpException {
    name: "ServerApiException";
    exception: any;
}

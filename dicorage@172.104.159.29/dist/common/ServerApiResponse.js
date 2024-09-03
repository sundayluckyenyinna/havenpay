"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageSource_1 = require("../utils/MessageSource");
const ResponseCode_1 = require("./ResponseCode");
class ServerApiResponse {
    constructor(responseCode, responseMessage, responseData) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.responseData = responseData;
    }
    static ofSuccess(responseData) {
        return new ServerApiResponse(ResponseCode_1.default.SUCCESS, MessageSource_1.default.getProperty("api.success"), responseData);
    }
}
exports.default = ServerApiResponse;
//# sourceMappingURL=ServerApiResponse.js.map
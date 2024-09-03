"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmnixConnectionException = exports.UserNotFoundException = exports.UserAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
class UserAlreadyExistsException extends common_1.HttpException {
}
exports.UserAlreadyExistsException = UserAlreadyExistsException;
class UserNotFoundException extends common_1.HttpException {
}
exports.UserNotFoundException = UserNotFoundException;
class OmnixConnectionException extends common_1.HttpException {
}
exports.OmnixConnectionException = OmnixConnectionException;
//# sourceMappingURL=ValidationException.js.map
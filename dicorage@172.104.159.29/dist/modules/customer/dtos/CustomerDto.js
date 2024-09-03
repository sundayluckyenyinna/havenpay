"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordRequestDto = exports.CustomerLoginRequestDto = exports.RegisterCustomerRequestDto = exports.SendOtpRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class SendOtpRequestDto {
}
exports.SendOtpRequestDto = SendOtpRequestDto;
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], SendOtpRequestDto.prototype, "mobileNumber", void 0);
class RegisterCustomerRequestDto {
}
exports.RegisterCustomerRequestDto = RegisterCustomerRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "biometric", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.Length)(11, 11),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "bvn", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "otp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "emailAddress", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.Length)(11, 11),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "nin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "referralCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "transactionPin", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "imei", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "localGovernment", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ enum: [client_1.MaritalStatus] }),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "residentialAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "securityAnswer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "securityQuestion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerRequestDto.prototype, "utilityBillBase64", void 0);
class CustomerLoginRequestDto {
}
exports.CustomerLoginRequestDto = CustomerLoginRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerLoginRequestDto.prototype, "queryValue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerLoginRequestDto.prototype, "password", void 0);
class ForgotPasswordRequestDto {
}
exports.ForgotPasswordRequestDto = ForgotPasswordRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ForgotPasswordRequestDto.prototype, "otp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ForgotPasswordRequestDto.prototype, "newPassword", void 0);
//# sourceMappingURL=CustomerDto.js.map
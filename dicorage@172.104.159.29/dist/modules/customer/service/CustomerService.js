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
const common_1 = require("@nestjs/common");
const PrismaRepository_1 = require("../../../config/db/PrismaRepository");
const ServerApiResponse_1 = require("../../../common/ServerApiResponse");
const OmnixClient_1 = require("../../../web/omnix/OmnixClient");
const UserValidationService_1 = require("../../validation/service/UserValidationService");
const Environment_1 = require("../../../utils/Environment");
const ResponseCode_1 = require("../../../common/ResponseCode");
const ServerException_1 = require("../../validation/error/ServerException");
const CommonUtil_1 = require("../../../utils/CommonUtil");
const OmnixUtils_1 = require("../../../web/omnix/OmnixUtils");
let CustomerService = class CustomerService {
    constructor(prismaRepo, validationService) {
        this.prismaRepo = prismaRepo;
        this.validationService = validationService;
    }
    async processSendCustomerOtp(requestDto) {
        try {
            const otpRequestUrl = Environment_1.default.getProperty("omnix.api.otp");
            const omnixOtpRequest = { imei: undefined, mobileNumber: requestDto.mobileNumber, requestId: String(new Date().getTime()) };
            const omnixResponse = await OmnixClient_1.default.postOmnixResponse(otpRequestUrl, undefined, omnixOtpRequest, {});
            return new ServerApiResponse_1.default(ResponseCode_1.default.SUCCESS, omnixResponse.responseMessage, omnixResponse.responseData);
        }
        catch (exception) {
            throw new ServerException_1.ServerApiException(exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async processCustomerRegistration(requestDto) {
        try {
            this.validationService.validateUserUniquenessByMobileNumber(requestDto.mobileNumber);
            this.validationService.validateUserUniquenessByEmailAddress(requestDto.emailAddress);
            const omnixRequestBody = {
                biometric: requestDto.biometric,
                bvn: requestDto.bvn,
                email: requestDto.emailAddress,
                imei: requestDto.imei,
                localGovernment: requestDto.localGovernment,
                maritalStatus: requestDto.maritalStatus,
                mobileNumber: requestDto.mobileNumber,
                nin: requestDto.nin,
                password: requestDto.password,
                referralCode: requestDto.referralCode,
                requestId: CommonUtil_1.default.generateRequestId(),
                residentialAddress: requestDto.residentialAddress,
                sectorCode: 1000,
                securityAnswer: requestDto.securityAnswer,
                securityQuestion: requestDto.securityQuestion,
                signupOtp: requestDto.otp,
                state: requestDto.state,
                transactionPin: requestDto.transactionPin,
                utilityBillBase64: requestDto.utilityBillBase64
            };
            const omnixUrl = Environment_1.default.getProperty('omnix.api.create-customer');
            const omnixResponse = await OmnixClient_1.default.postOmnixResponse(omnixUrl, undefined, omnixRequestBody, {});
            if (OmnixUtils_1.default.isSuccessfulResponse(omnixResponse.responseCode)) {
                const omnixCustomerResponseData = omnixResponse.responseData;
            }
            return ServerApiResponse_1.default.ofSuccess('');
        }
        catch (exception) {
            throw new ServerException_1.ServerApiException(exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaRepository_1.default,
        UserValidationService_1.default])
], CustomerService);
exports.default = CustomerService;
//# sourceMappingURL=CustomerService.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const CustomerService_1 = require("../service/CustomerService");
const swagger_1 = require("@nestjs/swagger");
const CustomerDto_1 = require("../dtos/CustomerDto");
const CustomerResponse_1 = require("../types/CustomerResponse");
const SwaggerDecorators_1 = require("../../../decorators/SwaggerDecorators");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async processCustomerSignup(requestDto) {
        return await this.customerService.processSendCustomerOtp(requestDto);
    }
    async processCustomerRegistration(requestDto) {
        return null;
    }
};
__decorate([
    (0, common_1.Post)("/send-otp"),
    (0, SwaggerDecorators_1.ApiOkResponseSchema)(String),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto_1.SendOtpRequestDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "processCustomerSignup", null);
__decorate([
    (0, common_1.Post)("/register"),
    (0, SwaggerDecorators_1.ApiOkResponseSchema)(CustomerResponse_1.RegisterCustomerResponseDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto_1.RegisterCustomerRequestDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "processCustomerRegistration", null);
CustomerController = __decorate([
    (0, common_1.Controller)({
        path: "/customer"
    }),
    (0, swagger_1.ApiTags)('Customer Management'),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad request response", status: 400 }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200 }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: "Server error" }),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [CustomerService_1.default])
], CustomerController);
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map
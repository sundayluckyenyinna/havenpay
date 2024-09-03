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
const ValidationException_1 = require("../error/ValidationException");
let UserValidationService = class UserValidationService {
    constructor(prismaRepository) {
        this.prismaRepository = prismaRepository;
    }
    async validateUserUniquenessByMobileNumber(mobileNumber) {
        const customer = await this.prismaRepository.customer.findUnique({ where: {
                phoneNumber: mobileNumber
            } });
        if (customer) {
            throw new ValidationException_1.UserAlreadyExistsException(`User with mobileNumber ${mobileNumber} already exists`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async validateUserUniquenessByEmailAddress(email) {
        const customer = await this.prismaRepository.customer.findUnique({
            where: {
                emailAddress: email
            }
        });
        if (customer) {
            throw new ValidationException_1.UserAlreadyExistsException(`User with email address ${email} already exists`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async validateUserExistenceByMobileNumber(mobileNumber) {
        const customer = await this.prismaRepository.customer.findUnique({
            where: {
                phoneNumber: mobileNumber
            }
        });
        if (!customer) {
            throw new ValidationException_1.UserNotFoundException(`No user record found for phone number: ${mobileNumber}`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
UserValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaRepository_1.default])
], UserValidationService);
exports.default = UserValidationService;
//# sourceMappingURL=UserValidationService.js.map
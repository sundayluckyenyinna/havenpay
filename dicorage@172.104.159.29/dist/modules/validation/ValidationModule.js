"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const UserValidationService_1 = require("./service/UserValidationService");
const PrismaRepository_1 = require("../../config/db/PrismaRepository");
let ValidationModule = class ValidationModule {
};
ValidationModule = __decorate([
    (0, common_1.Module)({
        providers: [UserValidationService_1.default, PrismaRepository_1.default],
        exports: [UserValidationService_1.default]
    })
], ValidationModule);
exports.default = ValidationModule;
//# sourceMappingURL=ValidationModule.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ResourceLoaderConfig_1 = require("./res/ResourceLoaderConfig");
const DatabaseConfig_1 = require("./db/DatabaseConfig");
const PrismaRepository_1 = require("./db/PrismaRepository");
let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = __decorate([
    (0, common_1.Module)({
        imports: [ResourceLoaderConfig_1.default.configure(), DatabaseConfig_1.default.configure()],
        providers: [PrismaRepository_1.default],
    })
], ConfigurationModule);
exports.default = ConfigurationModule;
//# sourceMappingURL=ConfigurationModule.js.map
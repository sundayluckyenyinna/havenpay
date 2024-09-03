"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
class DatabaseConfig {
    static initDatabaseConfigOrFail() {
    }
}
DatabaseConfig.configure = () => {
    return config_1.ConfigModule.forRoot({
        load: [],
        isGlobal: true,
        cache: true
    });
};
exports.default = DatabaseConfig;
//# sourceMappingURL=DatabaseConfig.js.map
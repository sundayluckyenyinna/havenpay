"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const Environment_1 = require("./utils/Environment");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const env = new Environment_1.default();
    const config = new swagger_1.DocumentBuilder()
        .setTitle(env.getProperty("swagger.title"))
        .setDescription(env.getProperty("swagger.desc"))
        .setVersion(env.getProperty("swagger.version"))
        .addBearerAuth()
        .addTag(env.getProperty("swagger.tag"))
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    app.enableCors({ origin: "*", methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], credentials: true });
    app.use((0, express_1.json)({ limit: "50mb" }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
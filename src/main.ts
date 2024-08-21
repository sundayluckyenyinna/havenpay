/* eslint-disable */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { json } from "express";
import Environment from "./utils/Environment";
import * as cookieParser from "cookie-parser";
import { RegisterCustomerResponse } from "./modules/customer/types/CustomerResponse";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger config
  const env: Environment = new Environment();
  const config = new DocumentBuilder()
    .setTitle(env.getProperty("swagger.title"))
    .setDescription(env.getProperty("swagger.desc"))
    .setVersion(env.getProperty("swagger.version"))
      .addBearerAuth()
    .addTag(env.getProperty("swagger.tag"))
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  // Validation configuration.
  app.useGlobalPipes(new ValidationPipe());

  // Use cookie-parser middle-ware
  app.use(cookieParser())

  app.enableCors({ origin: "*", methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], credentials: true });

  // Server static files in public folder of root project directory.
  // app.use(express.static(path.join(__dirname, './public')));
  app.use(json({ limit: "50mb" }));
  console.log(RegisterCustomerResponse.fromJson({ firstNames: 'Sunday', middleNameh: 'Lucky'}));
  await app.listen(3000);
}
bootstrap();

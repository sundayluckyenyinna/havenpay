/* eslint-disable */
import { DynamicModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

export default class DatabaseConfig {

  static configure = (): DynamicModule => {
    return ConfigModule.forRoot({
      load: [],
      isGlobal: true,
      cache: true
    });
  }

  static initDatabaseConfigOrFail(){

  }
}
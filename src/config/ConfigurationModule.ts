/* eslint-disable */

import { Module } from "@nestjs/common";
import ResourceLoaderConfig from "./res/ResourceLoaderConfig";
import DatabaseConfig from "./db/DatabaseConfig";
import PrismaRepository from "./db/PrismaRepository";

@Module({
  imports: [ResourceLoaderConfig.configure(), DatabaseConfig.configure()],
  providers: [PrismaRepository],
})
export default class ConfigurationModule {}
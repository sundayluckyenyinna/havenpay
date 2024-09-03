import { DynamicModule } from "@nestjs/common";
export default class DatabaseConfig {
    static configure: () => DynamicModule;
    static initDatabaseConfigOrFail(): void;
}

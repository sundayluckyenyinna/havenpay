import { DynamicModule } from "@nestjs/common";
export default class ResourceLoaderConfig {
    static profile: string;
    static configure: () => DynamicModule;
    static loadPropertiesOrFail: () => Record<string, any>;
    static loadMessageSourceOrFail: () => Record<string, any>;
    static getResourceValueRecursive(property: string, records: Record<string, any>): string;
    private static getRecordsFromResourceYamlFile;
    private static getResource;
    private static getResourceDir;
    private static getAllResources;
}

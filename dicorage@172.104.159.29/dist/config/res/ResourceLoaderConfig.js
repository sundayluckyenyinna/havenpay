"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yaml = require("js-yaml");
const path = require("path");
const process = require("process");
const fs = require("fs");
const config_1 = require("@nestjs/config");
const ZooItemKeeper_1 = require("../../utils/ZooItemKeeper");
class ResourceLoaderConfig {
    static getResourceValueRecursive(property, records) {
        const keys = property.trim().split('.');
        let currentValue = undefined;
        for (let i = 0; i < keys.length; i++) {
            const currentKey = keys[i];
            currentValue = records[currentKey];
            if (typeof currentValue !== 'object' || currentValue === undefined)
                break;
            records = currentValue;
        }
        if (typeof currentValue === 'object')
            return undefined;
        return currentValue;
    }
}
ResourceLoaderConfig.configure = () => {
    return config_1.ConfigModule.forRoot({
        load: [ResourceLoaderConfig.loadPropertiesOrFail, ResourceLoaderConfig.loadMessageSourceOrFail],
        isGlobal: true,
        cache: true
    });
};
ResourceLoaderConfig.loadPropertiesOrFail = () => {
    const mainResourceYamlFile = "application.yml";
    const allResourceFiles = ResourceLoaderConfig.getAllResources();
    if (!allResourceFiles.includes(mainResourceYamlFile)) {
        throw Error('No main resource found: Could not find mandatory application.yaml file!');
    }
    const allYamlFiles = allResourceFiles.filter(file => file.endsWith(".yml"));
    const mainResourceFileDoc = ResourceLoaderConfig.getRecordsFromResourceYamlFile(mainResourceYamlFile);
    const activeProfile = mainResourceFileDoc.birds.profiles.active || 'default';
    let resolvedRecords;
    if (activeProfile === 'default') {
        resolvedRecords = mainResourceFileDoc;
    }
    const propertyFilePath = ['application', '-', activeProfile.trim(), '.yml'].join('');
    if (!allYamlFiles.includes(propertyFilePath)) {
        throw Error('Could not find property file: '.concat(propertyFilePath).concat(' due to profile: ').concat(activeProfile).concat(' set in ').concat(mainResourceYamlFile).concat(' file'));
    }
    resolvedRecords = ResourceLoaderConfig.getRecordsFromResourceYamlFile(propertyFilePath);
    ZooItemKeeper_1.default.setItem(ZooItemKeeper_1.Item.ACTIVE_PROFILE, activeProfile);
    ZooItemKeeper_1.default.setItem(ZooItemKeeper_1.Item.APP_CONFIG, resolvedRecords);
    ResourceLoaderConfig.profile = activeProfile;
    return resolvedRecords;
};
ResourceLoaderConfig.loadMessageSourceOrFail = () => {
    const messageSourceFileName = "messages.yml";
    let records = ResourceLoaderConfig.getRecordsFromResourceYamlFile(messageSourceFileName);
    if (records === null || records === undefined) {
        throw Error('Could not load message sources');
    }
    ZooItemKeeper_1.default.setItem(ZooItemKeeper_1.Item.MESSAGE_SOURCE, records);
    return records;
};
ResourceLoaderConfig.getRecordsFromResourceYamlFile = (fileName) => {
    const appConfigRecords = yaml.load(fs.readFileSync(ResourceLoaderConfig
        .getResource(fileName), 'utf8'));
    return appConfigRecords;
};
ResourceLoaderConfig.getResource = (resourceFile) => {
    return path.join(ResourceLoaderConfig.getResourceDir(), resourceFile);
};
ResourceLoaderConfig.getResourceDir = () => {
    const resourcePath = path.join(process.cwd(), 'resources');
    return resourcePath;
};
ResourceLoaderConfig.getAllResources = () => {
    return fs.readdirSync(ResourceLoaderConfig.getResourceDir(), 'utf8');
};
exports.default = ResourceLoaderConfig;
//# sourceMappingURL=ResourceLoaderConfig.js.map
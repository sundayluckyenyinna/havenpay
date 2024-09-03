"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZooItemKeeper_1 = require("./ZooItemKeeper");
const ResourceLoaderConfig_1 = require("../config/res/ResourceLoaderConfig");
class Environment {
    constructor() {
        this.getProperty = (property) => {
            return Environment.getProperty(property);
        };
    }
}
Environment.getProperty = (property) => {
    let records = ZooItemKeeper_1.default.getItem(ZooItemKeeper_1.Item.APP_CONFIG);
    if (records === null || records === undefined || Object.keys(records).length === 0) {
        records = ResourceLoaderConfig_1.default.loadPropertiesOrFail();
        ZooItemKeeper_1.default.setItem(ZooItemKeeper_1.Item.APP_CONFIG, records);
    }
    return ResourceLoaderConfig_1.default.getResourceValueRecursive(property, records);
};
exports.default = Environment;
//# sourceMappingURL=Environment.js.map
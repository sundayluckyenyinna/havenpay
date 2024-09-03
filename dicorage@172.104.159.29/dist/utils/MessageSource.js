"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZooItemKeeper_1 = require("./ZooItemKeeper");
const ResourceLoaderConfig_1 = require("../config/res/ResourceLoaderConfig");
class MessageSource {
    constructor() {
        this.getProperty = (property) => {
            return MessageSource.getProperty(property);
        };
    }
}
MessageSource.getProperty = (property) => {
    let records = ZooItemKeeper_1.default.getItem(ZooItemKeeper_1.Item.MESSAGE_SOURCE);
    if (records === null || records === undefined || Object.keys(records).length === 0) {
        records = ResourceLoaderConfig_1.default.loadMessageSourceOrFail();
        ZooItemKeeper_1.default.setItem(ZooItemKeeper_1.Item.MESSAGE_SOURCE, records);
    }
    return ResourceLoaderConfig_1.default.getResourceValueRecursive(property, records);
};
exports.default = MessageSource;
//# sourceMappingURL=MessageSource.js.map
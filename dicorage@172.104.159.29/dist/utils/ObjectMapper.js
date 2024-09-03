"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectMapper {
    static fromJson(jsonString) {
        return JSON.parse(jsonString);
    }
    static toJson(object) {
        return JSON.stringify(object);
    }
}
exports.default = ObjectMapper;
//# sourceMappingURL=ObjectMapper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class ZooItemKeeper {
}
ZooItemKeeper.entries = new Map();
ZooItemKeeper.setItem = (item, value) => {
    ZooItemKeeper.entries.set(item, value);
};
ZooItemKeeper.getItem = (item) => ZooItemKeeper.entries.get(item);
exports.default = ZooItemKeeper;
var Item;
(function (Item) {
    Item["TEMPLATE"] = "TEMPLATE";
    Item["APP_CONFIG"] = "APP_CONFIG";
    Item["MESSAGE_SOURCE"] = "MESSAGE_SOURCE";
    Item["ACTIVE_PROFILE"] = "ACTIVE_PROFILE";
    Item["OMNIX_CONNECTION"] = "OMNIX_CONNECTION";
})(Item || (exports.Item = Item = {}));
//# sourceMappingURL=ZooItemKeeper.js.map
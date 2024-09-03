export default class ZooItemKeeper {
    static entries: Map<Item, any>;
    static setItem: (item: Item, value: any) => void;
    static getItem: (item: Item) => any;
}
export declare enum Item {
    TEMPLATE = "TEMPLATE",
    APP_CONFIG = "APP_CONFIG",
    MESSAGE_SOURCE = "MESSAGE_SOURCE",
    ACTIVE_PROFILE = "ACTIVE_PROFILE",
    OMNIX_CONNECTION = "OMNIX_CONNECTION"
}

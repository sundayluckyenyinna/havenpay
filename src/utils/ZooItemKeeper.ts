/* eslint-disable */

export default class ZooItemKeeper {
  public static entries: Map<Item, any> = new Map<Item, object>();
  static setItem = (item: Item, value: any): void => {
    ZooItemKeeper.entries.set(item, value);
  }
  static getItem = (item: Item): any => ZooItemKeeper.entries.get(item);
}

export enum Item{
    TEMPLATE = "TEMPLATE",
    APP_CONFIG = "APP_CONFIG",
    MESSAGE_SOURCE = "MESSAGE_SOURCE",
    ACTIVE_PROFILE = "ACTIVE_PROFILE",
    OMNIX_CONNECTION = "OMNIX_CONNECTION"
}
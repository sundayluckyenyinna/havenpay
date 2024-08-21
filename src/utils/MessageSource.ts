/* eslint-disable */

import ZooItemKeeper, { Item } from "./ZooItemKeeper";
import ResourceLoaderConfig from "../config/res/ResourceLoaderConfig";

export default class MessageSource{

  public static getProperty = (property: string): string => {
    let records: Record<string, any> = ZooItemKeeper.getItem(Item.MESSAGE_SOURCE);
    if(records === null || records === undefined || Object.keys(records).length === 0){
      records = ResourceLoaderConfig.loadMessageSourceOrFail();
      ZooItemKeeper.setItem(Item.MESSAGE_SOURCE, records);
    }
     return ResourceLoaderConfig.getResourceValueRecursive(property, records);
  }

  public getProperty = (property: string): string => {
    return MessageSource.getProperty(property);
  }
}
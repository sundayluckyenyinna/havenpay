/* eslint-disable */

import ZooItemKeeper, { Item } from "./ZooItemKeeper";
import ResourceLoaderConfig from "../config/res/ResourceLoaderConfig";

export default class Environment {

  public static getProperty = (property: string): string => {
    let records: Record<string, any> = ZooItemKeeper.getItem(Item.APP_CONFIG);
    if(records === null || records === undefined || Object.keys(records).length === 0){
      records = ResourceLoaderConfig.loadPropertiesOrFail();
      ZooItemKeeper.setItem(Item.APP_CONFIG, records);
    }
    return ResourceLoaderConfig.getResourceValueRecursive(property, records);
  }

  public getProperty = (property: string): string => {
    return Environment.getProperty(property);
  }
}
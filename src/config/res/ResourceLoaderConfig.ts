/* eslint-disable */

import * as yaml from "js-yaml";
import * as path from "path";
import * as process from "process";
import * as fs from "fs";
import { DynamicModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import ZooItemKeeper, { Item } from "../../utils/ZooItemKeeper";

export default class ResourceLoaderConfig {

  static profile: string;

  static configure = (): DynamicModule => {
    return ConfigModule.forRoot({
      load: [ResourceLoaderConfig.loadPropertiesOrFail, ResourceLoaderConfig.loadMessageSourceOrFail],
      isGlobal: true,
      cache: true
    });
  }

  static loadPropertiesOrFail = (): Record<string, any> => {
    const mainResourceYamlFile: string = "application.yml";
    const allResourceFiles: Array<string> = ResourceLoaderConfig.getAllResources();
    if(!allResourceFiles.includes(mainResourceYamlFile)){
      throw Error('No main resource found: Could not find mandatory application.yaml file!')
    }
    const allYamlFiles: Array<string> = allResourceFiles.filter(file => file.endsWith(".yml"));
    const mainResourceFileDoc: Record<string, any> = ResourceLoaderConfig.getRecordsFromResourceYamlFile(mainResourceYamlFile);
    const activeProfile: string = mainResourceFileDoc.birds.profiles.active || 'default';
    let resolvedRecords: Record<string, any>;
    if(activeProfile === 'default'){
      resolvedRecords =  mainResourceFileDoc;
    }
    const propertyFilePath: string = ['application', '-', activeProfile.trim(), '.yml'].join('');
    if(!allYamlFiles.includes(propertyFilePath)) {
      throw Error('Could not find property file: '.concat(propertyFilePath).concat(' due to profile: ').concat(activeProfile).concat(' set in ').concat(mainResourceYamlFile).concat(' file'));
    }
    resolvedRecords = ResourceLoaderConfig.getRecordsFromResourceYamlFile(propertyFilePath);
    ZooItemKeeper.setItem(Item.ACTIVE_PROFILE, activeProfile);
    ZooItemKeeper.setItem(Item.APP_CONFIG, resolvedRecords);
    ResourceLoaderConfig.profile = activeProfile;
    return resolvedRecords;
  }

  static loadMessageSourceOrFail = (): Record<string, any> => {
    const messageSourceFileName: string = "messages.yml";
    let records: Record<string, any> = ResourceLoaderConfig.getRecordsFromResourceYamlFile(messageSourceFileName);
    if(records === null || records === undefined){
      throw Error('Could not load message sources');
    }
    ZooItemKeeper.setItem(Item.MESSAGE_SOURCE, records);
    return records;
  }

  static getResourceValueRecursive(property: string, records: Record<string, any>): string {
    const keys: Array<string> = property.trim().split('.');
    let currentValue: string | undefined = undefined;
    for(let i: number = 0; i < keys.length; i++){
      const currentKey: string = keys[i];
      currentValue = records[currentKey];
      if(typeof currentValue !== 'object' || currentValue === undefined)
        break;
      records = currentValue;
    }
    if(typeof currentValue === 'object')
      return undefined;
    return currentValue;
  }

  private static getRecordsFromResourceYamlFile = (fileName: string): Record<string, any> => {
    const appConfigRecords: Record<string, any> = yaml.load(fs.readFileSync(ResourceLoaderConfig
      .getResource(fileName), 'utf8')) as Record<string, any>;
    return appConfigRecords;
  }

  private static getResource = (resourceFile: string) : string => {
    return path.join(ResourceLoaderConfig.getResourceDir(), resourceFile);
  }
  private static getResourceDir = (): string => {
    const resourcePath: string =  path.join(process.cwd(), 'resources');
    return resourcePath;
  }

  private static getAllResources = () : Array<string> => {
    return fs.readdirSync(ResourceLoaderConfig.getResourceDir(), 'utf8');
  }
}
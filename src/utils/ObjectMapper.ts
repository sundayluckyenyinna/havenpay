/* eslint-disable */

export default class ObjectMapper{


    static fromJson<T>(jsonString: string): T {
        return JSON.parse(jsonString) as T;
    }

    static toJson(object : object){
        return JSON.stringify(object);
    }
}
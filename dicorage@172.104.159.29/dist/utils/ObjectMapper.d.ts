export default class ObjectMapper {
    static fromJson<T>(jsonString: string): T;
    static toJson(object: object): string;
}

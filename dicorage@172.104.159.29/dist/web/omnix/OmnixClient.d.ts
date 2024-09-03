import OmnixResponse from "./OmnixResponse";
export default class OmnixClient {
    static getOmnixResponse<T>(path: string, idToken?: string, queries?: object | undefined): Promise<OmnixResponse<T>>;
    static postOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>;
    static putOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>;
    static patchOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>;
    private static processOmnixResponse;
    private static validateOmnixConnectionResponse;
    private static resolveOmnixUrl;
    private static getOmnixConnectionHeaders;
}

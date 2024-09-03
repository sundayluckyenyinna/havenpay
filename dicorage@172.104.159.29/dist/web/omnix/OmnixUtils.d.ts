import { OmnixCredentialsData, OmnixParametersData } from "./OmnixConection";
import OmnixResponse from "./OmnixResponse";
export default class OmnixUtils {
    static getApplicationCredentials(): Promise<string>;
    static getOmnixConnectionParameters(): Promise<OmnixResponse<OmnixParametersData>>;
    static getOmnixConnectionCredentials(): Promise<OmnixResponse<OmnixCredentialsData>>;
    static isSuccessfulResponse(responseCode: string): boolean;
}

/* eslint-disable */

import Environment from "src/utils/Environment";
import { OmnixParametersData } from "./OmnixConection";
import OmnixResponse from "./OmnixResponse";

export default class OmnixUtils{


    async getOmnixConnectionParameters(): Promise<OmnixResponse<OmnixParametersData>> | undefined {
        const channel: string = Environment.getProperty("omnix.connection.channel");
        return null;
    }
}
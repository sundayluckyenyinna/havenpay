"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Environment_1 = require("../../utils/Environment");
const WebClient_1 = require("../webclient/WebClient");
const ValidationException_1 = require("../../modules/validation/error/ValidationException");
const common_1 = require("@nestjs/common");
const ZooItemKeeper_1 = require("../../utils/ZooItemKeeper");
const ResponseCode_1 = require("../../common/ResponseCode");
const spacetime = require('spacetime');
class OmnixUtils {
    static async getApplicationCredentials() {
        const credentials = ZooItemKeeper_1.default.getItem(ZooItemKeeper_1.Item.OMNIX_CONNECTION);
        if (credentials === null || credentials === undefined) {
            return (await this.getOmnixConnectionCredentials()).responseData.accessToken;
        }
        const expiration = credentials.expiredAt;
        const accessTokenExpired = spacetime(expiration).isBefore(spacetime.now()) || spacetime(expiration).isEqual(spacetime.now());
        if (accessTokenExpired) {
            return (await this.getOmnixConnectionCredentials()).responseData.accessToken;
        }
        return credentials.accessToken;
    }
    static async getOmnixConnectionParameters() {
        try {
            const channel = Environment_1.default.getProperty('omnix.connection.channel');
            const parameterPath = Environment_1.default.getProperty('omnix.api.baseurl').concat(Environment_1.default.getProperty('omnix.api.parameters').replace('{channel}', channel));
            const axiosResponse = await WebClient_1.default.getBasicExchange(parameterPath);
            if (axiosResponse.status >= 200 || axiosResponse.status < 300) {
                const responseObject = axiosResponse.data;
                const responseJson = JSON.stringify(responseObject);
                const omnixResponse = JSON.parse(responseJson);
                return omnixResponse;
            }
            throw new ValidationException_1.OmnixConnectionException(`${axiosResponse.data}`, common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        catch (exception) {
            throw new ValidationException_1.OmnixConnectionException(`${exception}`, common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
    static async getOmnixConnectionCredentials() {
        try {
            const channel = Environment_1.default.getProperty('omnix.connection.channel');
            const parameterData = (await this.getOmnixConnectionParameters()).responseData;
            const username = Buffer.from(parameterData.username, 'base64').toString('utf-8');
            const password = Buffer.from(parameterData.password, 'base64').toString('utf-8');
            const body = { apiId: username, apiKey: password };
            const credentialsPath = Environment_1.default.getProperty('omnix.api.baseurl').concat(Environment_1.default.getProperty('omnix.api.credentials').replace('{channel}', channel));
            const axiosResponse = await WebClient_1.default.postBasicBodyExchange(credentialsPath, body);
            if (axiosResponse.status >= 200 || axiosResponse.status < 300) {
                const responseObject = axiosResponse.data;
                const responseJson = JSON.stringify(responseObject);
                const omnixResponse = JSON.parse(responseJson);
                const accessTokenExpirationInMin = Number(Environment_1.default.getProperty("omnix.connection.access-token-expiration-in-min"));
                omnixResponse.responseData.createdAt = spacetime.now().toNativeDate();
                omnixResponse.responseData.expiredAt = spacetime.now().add(accessTokenExpirationInMin, 'minutes').toNativeDate();
                ZooItemKeeper_1.default.setItem(ZooItemKeeper_1.Item.OMNIX_CONNECTION, omnixResponse.responseData);
                return omnixResponse;
            }
            throw new ValidationException_1.OmnixConnectionException(`${axiosResponse.data}`, common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        catch (exception) {
            throw new ValidationException_1.OmnixConnectionException(`${exception}`, common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
    static isSuccessfulResponse(responseCode) {
        return responseCode === ResponseCode_1.default.SUCCESS;
    }
}
exports.default = OmnixUtils;
//# sourceMappingURL=OmnixUtils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Environment_1 = require("../../utils/Environment");
const OmnixUtils_1 = require("./OmnixUtils");
const WebClient_1 = require("../webclient/WebClient");
const ValidationException_1 = require("../../modules/validation/error/ValidationException");
const common_1 = require("@nestjs/common");
const ObjectMapper_1 = require("../../utils/ObjectMapper");
class OmnixClient {
    static async getOmnixResponse(path, idToken, queries) {
        try {
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url = this.resolveOmnixUrl(path);
            const axiosResponse = await WebClient_1.default.getDirectExchange(url, headers, queries);
            return this.processOmnixResponse(axiosResponse);
        }
        catch (exception) {
            throw new ValidationException_1.OmnixConnectionException(exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    static async postOmnixResponse(path, idToken, body, queries) {
        try {
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url = this.resolveOmnixUrl(path);
            const axiosResponse = await WebClient_1.default.postDirectBodyExchange(url, headers, queries, body);
            return this.processOmnixResponse(axiosResponse);
        }
        catch (exception) {
            throw new ValidationException_1.OmnixConnectionException(exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    static async putOmnixResponse(path, idToken, body, queries) {
        try {
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url = this.resolveOmnixUrl(path);
            const axiosResponse = await WebClient_1.default.putDirectBodyExchange(url, headers, queries, body);
            return this.processOmnixResponse(axiosResponse);
        }
        catch (exception) {
            throw new ValidationException_1.OmnixConnectionException(exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    static async patchOmnixResponse(path, idToken, body, queries) {
        try {
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url = this.resolveOmnixUrl(path);
            const axiosResponse = await WebClient_1.default.patchDirectBodyExchange(url, headers, queries, body);
            return this.processOmnixResponse(axiosResponse);
        }
        catch (exception) {
            throw new ValidationException_1.OmnixConnectionException(exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    static processOmnixResponse(axiosResponse) {
        const dataObject = axiosResponse.data;
        const dataJson = JSON.stringify(dataObject);
        const omnixResponse = ObjectMapper_1.default.fromJson(dataJson);
        this.validateOmnixConnectionResponse(axiosResponse, omnixResponse);
        return omnixResponse;
    }
    static validateOmnixConnectionResponse(axiosResponse, omnixResponse) {
        if (axiosResponse.status < 200 || axiosResponse.status > 299) {
            throw new ValidationException_1.OmnixConnectionException('Service temporarily availabel at the moment', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        if (omnixResponse.responseCode !== '00') {
            throw new ValidationException_1.OmnixConnectionException(omnixResponse.responseMessage, common_1.HttpStatus.FAILED_DEPENDENCY);
        }
    }
    static resolveOmnixUrl(path) {
        return Environment_1.default.getProperty('omnix.api.baseurl').concat(path);
    }
    static async getOmnixConnectionHeaders(idToken) {
        return {
            'Authorization': `Bearer ${await OmnixUtils_1.default.getApplicationCredentials()}`,
            'idToken': idToken,
            'Content-Type': 'application/json'
        };
    }
}
exports.default = OmnixClient;
//# sourceMappingURL=OmnixClient.js.map
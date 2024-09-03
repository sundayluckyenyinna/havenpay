"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class WebClient {
    static async getExchange(webRequest) {
        const axiosRequest = WebClient.getAxiosRequestConfigurations(webRequest);
        const response = await axios_1.default.get(webRequest.url, axiosRequest);
        return response;
    }
    static async getDirectExchange(url, headers, queries) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        };
        return await this.getExchange(webRequest);
    }
    static async getSimpleExchange(url, headers) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        };
        return await this.getExchange(webRequest);
    }
    static async getBasicExchange(url) {
        const webRequest = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        };
        return await this.getExchange(webRequest);
    }
    static async postExchange(webRequest) {
        const axiosRequest = WebClient.getAxiosRequestConfigurations(webRequest);
        const response = await axios_1.default.post(webRequest.url, webRequest.body, { headers: webRequest.headers });
        return response;
    }
    static async postDirectExchange(url, headers, queries) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        };
        return await this.postExchange(webRequest);
    }
    static async postDirectBodyExchange(url, headers, queries, body) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: body
        };
        return await this.postExchange(webRequest);
    }
    static async postSimpleExchange(url, headers) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        };
        return await this.postExchange(webRequest);
    }
    static async postSimpleBodyExchange(url, headers, body) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: {},
            body: body
        };
        return await this.postExchange(webRequest);
    }
    static async postBasicExchange(url) {
        const webRequest = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        };
        return await this.postExchange(webRequest);
    }
    static async postBasicBodyExchange(url, body) {
        const webRequest = {
            url: url,
            headers: {},
            queries: {},
            body: body
        };
        return await this.postExchange(webRequest);
    }
    static async putExchange(webRequest) {
        const axiosRequest = WebClient.getAxiosRequestConfigurations(webRequest);
        const response = await axios_1.default.put(webRequest.url, axiosRequest);
        return response;
    }
    static async putDirectExchange(url, headers, queries) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        };
        return await this.putExchange(webRequest);
    }
    static async putDirectBodyExchange(url, headers, queries, body) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: body
        };
        return await this.putExchange(webRequest);
    }
    static async putSimpleExchange(url, headers) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        };
        return await this.putExchange(webRequest);
    }
    static async putBasicExchange(url) {
        const webRequest = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        };
        return await this.putExchange(webRequest);
    }
    static async patchExchange(webRequest) {
        const axiosRequest = WebClient.getAxiosRequestConfigurations(webRequest);
        const response = await axios_1.default.put(webRequest.url, axiosRequest);
        return response;
    }
    static async patchDirectExchange(url, headers, queries) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        };
        return await this.patchExchange(webRequest);
    }
    static async patchDirectBodyExchange(url, headers, queries, body) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: body
        };
        return await this.patchExchange(webRequest);
    }
    static async patchSimpleExchange(url, headers) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        };
        return await this.patchExchange(webRequest);
    }
    static async patchBasicExchange(url) {
        const webRequest = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        };
        return await this.patchExchange(webRequest);
    }
    static async deleteExchange(webRequest) {
        const axiosRequest = WebClient.getAxiosRequestConfigurations(webRequest);
        const response = await axios_1.default.delete(webRequest.url, axiosRequest);
        return response;
    }
    static async deleteDirectExchange(url, headers, queries) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        };
        return await this.deleteExchange(webRequest);
    }
    static async deleteSimpleExchange(url, headers) {
        const webRequest = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        };
        return await this.deleteExchange(webRequest);
    }
    static async deleteBasicExchange(url) {
        const webRequest = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        };
        return await this.deleteExchange(webRequest);
    }
    static getAxiosRequestConfigurations(webRequest) {
        const axiosConfig = {
            url: webRequest.url,
            headers: webRequest.headers,
            data: JSON.stringify(webRequest.body),
            params: webRequest.queries
        };
        return axiosConfig;
    }
}
exports.default = WebClient;
//# sourceMappingURL=WebClient.js.map
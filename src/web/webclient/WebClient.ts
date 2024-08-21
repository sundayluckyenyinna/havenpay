/* eslint-disable */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class WebClient{

    // Get requests
    static async getExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.get(webRequest.url, axiosRequest);
        return response;
    }

    static async getDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.getExchange(webRequest);
    }

    static async getSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.getExchange(webRequest);
    }

    static async getBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.getExchange(webRequest);
    }


    // Post requests
    static async postExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.post(webRequest.url, axiosRequest);
        return response;
    }

    static async postDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.postExchange(webRequest);
    }

    static async postSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.postExchange(webRequest);
    }

    static async postBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.postExchange(webRequest);
    }

    // Put requests
    static async putExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.put(webRequest.url, axiosRequest);
        return response;
    }

    static async putDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.putExchange(webRequest);
    }

    static async putSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.putExchange(webRequest);
    }

    static async putBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.putExchange(webRequest);
    }

    // Patch request
    static async patchExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.put(webRequest.url, axiosRequest);
        return response;
    }

    static async patchDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.patchExchange(webRequest);
    }

    static async patchSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.patchExchange(webRequest);
    }

    static async patchBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.patchExchange(webRequest);
    }

    // delete request
    static async deleteExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.delete(webRequest.url, axiosRequest);
        return response;
    }

    static async deleteDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.deleteExchange(webRequest);
    }

    static async deleteSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.deleteExchange(webRequest);
    }

    static async deleteBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.deleteExchange(webRequest);
    }


    // Axios configuration
    static getAxiosRequestConfigurations(webRequest: WebRequest<any>): AxiosRequestConfig<any> {
        const axiosConfig: AxiosRequestConfig<any> = {
            url: webRequest.url,
            headers: webRequest.headers,
            data: webRequest.body,
            params: webRequest.queries
        }
        return axiosConfig;
    }
}


export interface WebRequest<T>{
    url: string;
    headers?: object;
    queries?: object
    body?: T;
}
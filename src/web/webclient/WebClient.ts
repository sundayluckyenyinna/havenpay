/* eslint-disable */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class WebClient{


    // Get requests
    async getExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.get(webRequest.url, axiosRequest);
        return response;
    }

    async getDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.getExchange(webRequest);
    }

    async getSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.getExchange(webRequest);
    }

    async getBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.getExchange(webRequest);
    }


    // Post requests
    async postExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.post(webRequest.url, axiosRequest);
        return response;
    }

    async postDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.postExchange(webRequest);
    }

    async postSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.postExchange(webRequest);
    }

    async postBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.postExchange(webRequest);
    }

    // Put requests
    async putExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.put(webRequest.url, axiosRequest);
        return response;
    }

    async putDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.putExchange(webRequest);
    }

    async putSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.putExchange(webRequest);
    }

    async putBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.putExchange(webRequest);
    }

    // Patch request
    async patchExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.put(webRequest.url, axiosRequest);
        return response;
    }

    async patchDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.patchExchange(webRequest);
    }

    async patchSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.patchExchange(webRequest);
    }

    async patchBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: {},
            queries: {},
            body: undefined
        }
        return await this.patchExchange(webRequest);
    }

    // delete request
    async deleteExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>{
        const axiosRequest: AxiosRequestConfig<any> = WebClient.getAxiosRequestConfigurations(webRequest);
        const response: AxiosResponse<any, any> = await axios.delete(webRequest.url, axiosRequest);
        return response;
    }

    async deleteDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>{
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: queries,
            body: undefined
        }
        return await this.deleteExchange(webRequest);
    }

    async deleteSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>> {
        const webRequest: WebRequest<any> = {
            url: url,
            headers: headers,
            queries: {},
            body: undefined
        }
        return await this.deleteExchange(webRequest);
    }

    async deleteBasicExchange(url: string): Promise<AxiosResponse<any, any>> {
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
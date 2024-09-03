import { AxiosRequestConfig, AxiosResponse } from "axios";
export default class WebClient {
    static getExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>;
    static getDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>;
    static getSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>>;
    static getBasicExchange(url: string): Promise<AxiosResponse<any, any>>;
    static postExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>;
    static postDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>;
    static postDirectBodyExchange(url: string, headers: object, queries: object, body: object): Promise<AxiosResponse<any, any>>;
    static postSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>>;
    static postSimpleBodyExchange(url: string, headers: object, body: object): Promise<AxiosResponse<any, any>>;
    static postBasicExchange(url: string): Promise<AxiosResponse<any, any>>;
    static postBasicBodyExchange(url: string, body: object): Promise<AxiosResponse<any, any>>;
    static putExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>;
    static putDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>;
    static putDirectBodyExchange(url: string, headers: object, queries: object, body: object): Promise<AxiosResponse<any, any>>;
    static putSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>>;
    static putBasicExchange(url: string): Promise<AxiosResponse<any, any>>;
    static patchExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>;
    static patchDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>;
    static patchDirectBodyExchange(url: string, headers: object, queries: object, body: object): Promise<AxiosResponse<any, any>>;
    static patchSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>>;
    static patchBasicExchange(url: string): Promise<AxiosResponse<any, any>>;
    static deleteExchange(webRequest: WebRequest<any>): Promise<AxiosResponse<any, any>>;
    static deleteDirectExchange(url: string, headers: object, queries: object): Promise<AxiosResponse<any, any>>;
    static deleteSimpleExchange(url: string, headers: object): Promise<AxiosResponse<any, any>>;
    static deleteBasicExchange(url: string): Promise<AxiosResponse<any, any>>;
    static getAxiosRequestConfigurations(webRequest: WebRequest<any>): AxiosRequestConfig<any>;
}
export interface WebRequest<T> {
    url: string;
    headers?: object;
    queries?: object;
    body?: T;
}

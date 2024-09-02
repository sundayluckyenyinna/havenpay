/* eslint-disable */

import Environment from "src/utils/Environment";
import OmnixUtils from "./OmnixUtils";
import OmnixResponse from "./OmnixResponse";
import { AxiosResponse } from "axios";
import WebClient from "../webclient/WebClient";
import { OmnixConnectionException } from "src/modules/validation/error/ValidationException";
import { HttpStatus } from "@nestjs/common";
import ObjectMapper from "src/utils/ObjectMapper";




export default class OmnixClient {


    static async getOmnixResponse<T>(path: string, idToken?: string, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.getDirectExchange(url, headers, queries);
            return this.processOmnixResponse(axiosResponse);
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    static async postOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.postDirectBodyExchange(url, headers, queries, body);
            return this.processOmnixResponse(axiosResponse);
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    static async putOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.putDirectBodyExchange(url, headers, queries, body);
            return this.processOmnixResponse(axiosResponse);
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    static async patchOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = await this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.patchDirectBodyExchange(url, headers, queries, body);
            return this.processOmnixResponse(axiosResponse);
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private static processOmnixResponse<T>(axiosResponse: AxiosResponse<any>): OmnixResponse<T> {
        const dataObject: object = axiosResponse.data;
        const dataJson: string = JSON.stringify(dataObject);            
        const omnixResponse: OmnixResponse<T> = ObjectMapper.fromJson<OmnixResponse<T>>(dataJson);
        this.validateOmnixConnectionResponse(axiosResponse, omnixResponse);
        return omnixResponse;
    }

    private static validateOmnixConnectionResponse<T>(axiosResponse: AxiosResponse<any>, omnixResponse: OmnixResponse<T>): void{
        if(axiosResponse.status < 200 || axiosResponse.status > 299){
            throw new OmnixConnectionException('Service temporarily availabel at the moment', HttpStatus.SERVICE_UNAVAILABLE);
        }
        if(omnixResponse.responseCode !== '00'){
            throw new OmnixConnectionException(omnixResponse.responseMessage, HttpStatus.FAILED_DEPENDENCY);
        }
    }

    private static resolveOmnixUrl(path: string): string{
        return Environment.getProperty('omnix.api.baseurl').concat(path);
    }

    private static async getOmnixConnectionHeaders(idToken: string): Promise<object>{
        return {
            'Authorization': `Bearer ${await OmnixUtils.getApplicationCredentials()}`,
            'idToken': idToken,
            'Content-Type': 'application/json'
        }
    }
}
/* eslint-disable */

import Environment from "src/utils/Environment";
import OmnixUtils from "./OmnixUtils";
import OmnixResponse from "./OmnixResponse";
import { AxiosResponse } from "axios";
import WebClient from "../webclient/WebClient";
import { OmnixConnectionException } from "src/modules/validation/error/ValidationException";
import { HttpStatus } from "@nestjs/common";

export default class OmnixClient {


    static async getOmnixResponse<T>(path: string, idToken?: string, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.getDirectExchange(url, headers, queries);
            const dataJson: string = String(axiosResponse.data) as string;
            const omnixResponse: OmnixResponse<T> = JSON.parse(dataJson);
            this.validateOmnixConnectionResponse(axiosResponse, omnixResponse);
            return omnixResponse;
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    static async postOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.postDirectBodyExchange(url, headers, queries, body);
            const dataJson: string = String(axiosResponse.data) as string;
            const omnixResponse: OmnixResponse<T> = JSON.parse(dataJson);
            this.validateOmnixConnectionResponse(axiosResponse, omnixResponse);
            return omnixResponse;
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    static async putOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.putDirectBodyExchange(url, headers, queries, body);
            const dataJson: string = String(axiosResponse.data) as string;
            const omnixResponse: OmnixResponse<T> = JSON.parse(dataJson);
            this.validateOmnixConnectionResponse(axiosResponse, omnixResponse);
            return omnixResponse;
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    static async patchOmnixResponse<T>(path: string, idToken?: string, body?: object, queries?: object | undefined): Promise<OmnixResponse<T>>{
        try{
            const headers = this.getOmnixConnectionHeaders(idToken);
            const url: string = this.resolveOmnixUrl(path);
            const axiosResponse: AxiosResponse<any> = await WebClient.patchDirectBodyExchange(url, headers, queries, body);
            const dataJson: string = String(axiosResponse.data) as string;
            const omnixResponse: OmnixResponse<T> = JSON.parse(dataJson);
            this.validateOmnixConnectionResponse(axiosResponse, omnixResponse);
            return omnixResponse;
        }catch(exception){
            throw new OmnixConnectionException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    static validateOmnixConnectionResponse<T>(axiosResponse: AxiosResponse<any>, omnixResponse: OmnixResponse<T>): void{
        if(axiosResponse.status < 200 || axiosResponse.status > 299){
            throw new OmnixConnectionException('Service temporarily availabel at the moment', HttpStatus.SERVICE_UNAVAILABLE);
        }
        if(omnixResponse.responseCode !== '00'){
            throw new OmnixConnectionException(omnixResponse.responseMessage, HttpStatus.FAILED_DEPENDENCY);
        }
    }

    static resolveOmnixUrl(path: string): string{
        return Environment.getProperty("omnix.api.baseUrl").concat(path);
    }

    static getOmnixConnectionHeaders(idToken: string): object{
        return {
            'Authorization': OmnixUtils.getApplicationCredentials,
            'idToken': idToken,
            'Content-Type': 'application/json'
        }
    }
}
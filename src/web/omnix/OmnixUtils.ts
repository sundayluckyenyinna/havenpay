/* eslint-disable */

import Environment from "src/utils/Environment";
import { OmnixCredentialsData, OmnixParametersData } from "./OmnixConection";
import OmnixResponse from "./OmnixResponse";
import { AxiosResponse } from "axios";
import WebClient from "../webclient/WebClient";
import { OmnixConnectionException } from "src/modules/validation/error/ValidationException";
import { HttpStatus } from "@nestjs/common";
import ZooItemKeeper, { Item } from "src/utils/ZooItemKeeper";
import spacetime from 'spacetime';

export default class OmnixUtils{


    static async getApplicationCredentials(): Promise<string> {
        const credentials: OmnixCredentialsData = ZooItemKeeper.getItem(Item.OMNIX_CONNECTION);
        if(credentials === null || credentials === undefined){
            return (await this.getOmnixConnectionCredentials()).responseData.accessToken;
        }
        const expiration: Date = credentials.expiredAt;
        const accessTokenExpired: boolean = spacetime(expiration).isBefore(spacetime.now()) || spacetime(expiration).isEqual(spacetime.now());
        if(accessTokenExpired){
            return (await this.getOmnixConnectionCredentials()).responseData.accessToken;
        }
        return credentials.accessToken;
    }

    static async getOmnixConnectionParameters(): Promise<OmnixResponse<OmnixParametersData>> {
        try{
            // const channel: string = Environment.getProperty("omnix.connection.channel");
            // const parametersPath: string = Environment.getProperty("omnix.api.baseurl").concat(Environment.getProperty("omnix.api.parameters").replace("{channel}", channel));
            const axiosResponse: AxiosResponse<any, any> = await WebClient.getBasicExchange("http://mobilebanking.accionmfb.com:1018/omnix/api/generate/mobiles/parameters");
            console.log('got here')
            if(axiosResponse.status >= 200 || axiosResponse.status < 300){
                const responseObject: object = axiosResponse.data;
                const responseJson: string = JSON.stringify(responseObject);
                const omnixResponse: OmnixResponse<OmnixParametersData> = JSON.parse(responseJson);
                return omnixResponse;
            }
            throw new OmnixConnectionException(`${axiosResponse.data}`, HttpStatus.SERVICE_UNAVAILABLE);
        }catch(exception){
            throw new OmnixConnectionException(`${exception}`, HttpStatus.SERVICE_UNAVAILABLE);
        }
    }

    static async getOmnixConnectionCredentials(): Promise<OmnixResponse<OmnixCredentialsData>> {
        // try{
            // const channel: string = Environment.getProperty("omnix.connection.channel");
            // const credentialsPath: string = Environment.getProperty("omnix.api.baseurl").concat(Environment.getProperty("omnix.api.credentials").replace("{channel}", "test"));
            const parameterData: OmnixParametersData = (await this.getOmnixConnectionParameters()).responseData;
            console.log(parameterData.username);
            const username: string = Buffer.from(parameterData.username, 'base64').toString('utf-8');
            console.log(username);
            const password: string = Buffer.from(parameterData.password, 'base64').toString('utf-8');
            const body: object = { apiId: username, apiKey: password }
            console.log(body);
            const axiosResponse: AxiosResponse<any, any> = await WebClient.postBasicBodyExchange("http://apiv2.accionmfb.com:2002/omnix/api/generate/test/credentials", body);
            if(axiosResponse.status >= 200 || axiosResponse.status < 300){
                const responseObject: object = axiosResponse.data;
                console.log(responseObject);
                const responseJson: string = JSON.stringify(responseObject);
                const omnixResponse: OmnixResponse<OmnixCredentialsData> = JSON.parse(responseJson);
                
        //         const accessTokenExpirationInMin: number = Number(Environment.getProperty("omnix.connection.access-token-expiration-in-min"));
        //         omnixResponse.responseData.createdAt = spacetime.now().toNativeDate();
        //         omnixResponse.responseData.expiredAt = spacetime.now().add(accessTokenExpirationInMin, 'minutes').toNativeDate();
        //         ZooItemKeeper.setItem(Item.OMNIX_CONNECTION, omnixResponse.responseData);
        //         return omnixResponse;
            }
        //     throw new OmnixConnectionException(`${axiosResponse.data}`, HttpStatus.SERVICE_UNAVAILABLE);
        // }catch(exception){
        //     throw new OmnixConnectionException(`${exception}`, HttpStatus.SERVICE_UNAVAILABLE); 
        // }
        return null;
    }
}
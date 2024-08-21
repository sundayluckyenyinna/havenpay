/* eslint-disable */

import MessageSource from "src/utils/MessageSource";
import ResponseCode from "./ResponseCode";

export default class ServerApiResponse<T> {

   private responseCode: string;

   private responseMessage: string;

   private responseData: T;

   constructor(responseCode: string, responseMessage: string, responseData: T){
      this.responseCode = responseCode;
      this.responseMessage = responseMessage;
      this.responseData = responseData;
   }

   public static ofSuccess(responseData){
      return new ServerApiResponse(ResponseCode.SUCCESS, MessageSource.getProperty("api.success"), responseData);
   }
}
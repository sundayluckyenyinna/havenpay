/* eslint-disable */

import { HttpStatus, Injectable } from "@nestjs/common";
import PrismaRepository from "../../../config/db/PrismaRepository";
import ServerApiResponse from "src/common/ServerApiResponse";
import OmnixClient from "src/web/omnix/OmnixClient";
import UserValidationService from "src/modules/validation/service/UserValidationService";
import { RegisterCustomerRequestDto, SendOtpRequestDto } from "../dtos/CustomerDto";
import OmnixResponse from "src/web/omnix/OmnixResponse";
import Environment from "src/utils/Environment";
import ResponseCode from "src/common/ResponseCode";
import { ServerApiException } from "src/modules/validation/error/ServerException";
import CommonUtil from "src/utils/CommonUtil";
import OmnixUtils from "src/web/omnix/OmnixUtils";
import { Customer } from "@prisma/client";
import { OmnixCustomerSignupResponseData } from "src/web/omnix/OmnixServerResponse";


@Injectable()
export default class CustomerService {
    
    constructor(
        private readonly prismaRepo: PrismaRepository,
        private readonly validationService: UserValidationService
    ) {}

    
    async processSendCustomerOtp(requestDto: SendOtpRequestDto): Promise<ServerApiResponse<string>>{
        try{
            const otpRequestUrl: string = Environment.getProperty("omnix.api.otp");
            const omnixOtpRequest: object = { imei: undefined, mobileNumber: requestDto.mobileNumber, requestId: String(new Date().getTime()) };
            const omnixResponse: OmnixResponse<string> = await OmnixClient.postOmnixResponse(otpRequestUrl, undefined, omnixOtpRequest, {});
            return new ServerApiResponse(ResponseCode.SUCCESS, omnixResponse.responseMessage, omnixResponse.responseData);
        }catch(exception){
            throw new ServerApiException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async processCustomerRegistration(requestDto: RegisterCustomerRequestDto){
        try{
            this.validationService.validateUserUniquenessByMobileNumber(requestDto.mobileNumber);
            this.validationService.validateUserUniquenessByEmailAddress(requestDto.emailAddress);
            const omnixRequestBody: object = {
                biometric: requestDto.biometric,
                bvn: requestDto.bvn,
                email: requestDto.emailAddress,
                imei: requestDto.imei,
                localGovernment: requestDto.localGovernment,
                maritalStatus: requestDto.maritalStatus,
                mobileNumber: requestDto.mobileNumber,
                nin: requestDto.nin,
                password: requestDto.password,
                referralCode: requestDto.referralCode,
                requestId: CommonUtil.generateRequestId(),
                residentialAddress: requestDto.residentialAddress,
                sectorCode: 1000,
                securityAnswer: requestDto.securityAnswer,
                securityQuestion: requestDto.securityQuestion,
                signupOtp: requestDto.otp,
                state: requestDto.state,
                transactionPin: requestDto.transactionPin,
                utilityBillBase64: requestDto.utilityBillBase64
            }
            const omnixUrl: string = Environment.getProperty('omnix.api.create-customer');
            const omnixResponse: OmnixResponse<OmnixCustomerSignupResponseData> = await OmnixClient.postOmnixResponse(omnixUrl, undefined, omnixRequestBody, {});
            if(OmnixUtils.isSuccessfulResponse(omnixResponse.responseCode)){
                const omnixCustomerResponseData: OmnixCustomerSignupResponseData = omnixResponse.responseData;
                // const customer: Customer = await this.prismaRepo.customer.create({
                //     data: {

                //     }
                // });
            }
            return ServerApiResponse.ofSuccess('');
        }catch(exception){
            throw new ServerApiException(exception, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
/* eslint-disable */

import { Injectable } from "@nestjs/common";
import PrismaRepository from "../../../config/db/PrismaRepository";
import { RegisterCustomerRequestDto } from "../dtos/CustomerDto";
import { RegisterCustomerResponse } from "../types/CustomerResponse";
import ServerApiResponse from "src/common/ServerApiResponse";
import OmnixClient from "src/web/omnix/OmnixClient";

@Injectable()
export default class CustomerService {

    constructor(private readonly prismaRepo: PrismaRepository) {
    }

    async processCustomerSignup(requestDto: RegisterCustomerRequestDto): Promise<ServerApiResponse<RegisterCustomerResponse>> {
        const test = OmnixClient.getOmnixResponse('/generate/{channel}/parameters');
        const responseData: RegisterCustomerResponse = RegisterCustomerResponse.fromJson({ firstNames: 'Sunday'});
        return ServerApiResponse.ofSuccess(responseData);
    }
}
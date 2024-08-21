/* eslint-disable */

import { Body, Controller, Get, Post } from "@nestjs/common";
import CustomerService from "../service/CustomerService";
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { RegisterCustomerRequestDto } from "../dtos/CustomerDto";
import { RegisterCustomerResponse } from "../types/CustomerResponse";
import ServerApiResponse from "src/common/ServerApiResponse";


@Controller({
  path: "/customer"
})
@ApiTags('Customer Management')
@ApiBadRequestResponse({ description: "Bad request response", status: 400 })
@ApiCreatedResponse({ status: 200 })
@ApiInternalServerErrorResponse({ description: "Server error" })
@ApiBearerAuth()
export default class CustomerController{

   constructor(private readonly customerService: CustomerService){}

   @Post("register")
   @ApiCreatedResponse({ status: 200, type: ServerApiResponse<RegisterCustomerResponse> })
   async processCustomerSignup(@Body() requestDto: RegisterCustomerRequestDto): Promise<ServerApiResponse<RegisterCustomerResponse>> {
      return await this.customerService.processCustomerSignup(requestDto);
   }
}
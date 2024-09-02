/* eslint-disable */

import { Body, Controller, Post } from "@nestjs/common";
import CustomerService from "../service/CustomerService";
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { RegisterCustomerRequestDto, SendOtpRequestDto } from "../dtos/CustomerDto";
import { RegisterCustomerResponseDto } from "../types/CustomerResponse";
import ServerApiResponse from "src/common/ServerApiResponse";
import { ApiOkResponseSchema } from "src/decorators/SwaggerDecorators";


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

   @Post("/send-otp")
   @ApiOkResponseSchema(String)
   async processCustomerSignup(@Body() requestDto: SendOtpRequestDto): Promise<ServerApiResponse<string>> {
      return await this.customerService.processSendCustomerOtp(requestDto);
   }

   @Post("/register")
   @ApiOkResponseSchema(RegisterCustomerResponseDto)
   async processCustomerRegistration(@Body() requestDto: RegisterCustomerRequestDto): Promise<ServerApiResponse<RegisterCustomerResponseDto>> {
      return null;
   }
}
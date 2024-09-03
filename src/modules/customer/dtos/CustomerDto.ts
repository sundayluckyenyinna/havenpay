/* eslint-disable */

import { ApiProperty } from "@nestjs/swagger";
import { MaritalStatus } from "@prisma/client";
import { IsBase64, IsEmail, IsNumberString, IsString, Length, isMobilePhone } from "class-validator";


// Request payload for sending otp
export class SendOtpRequestDto{
   
  @IsNumberString()
  @ApiProperty({ type: String })
  mobileNumber: string;

}

// Request payload to register customer
export class RegisterCustomerRequestDto{

  @IsString()
  @ApiProperty()
  biometric: string;

  @IsNumberString()
  @Length(11, 11)
  @ApiProperty()
  bvn: string;

  @IsString()
  @ApiProperty()
  otp: string;

  @IsString()
  @ApiProperty()
  fullName: string;

  @IsString()
  @ApiProperty()
  mobileNumber: string;

  @IsEmail()
  @ApiProperty()
  emailAddress: string;

  @IsNumberString()
  @Length(11, 11)
  @ApiProperty()
  nin: string;

  @ApiProperty()
  referralCode: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @Length(4, 4)
  @ApiProperty()
  transactionPin: string;

  @IsString()
  @ApiProperty()
  imei: string;

  @IsString()
  @ApiProperty()
  localGovernment: string;

  @IsString()
  @ApiProperty({ enum: [MaritalStatus] })
  maritalStatus: MaritalStatus;

  @IsString()
  @ApiProperty()
  residentialAddress: string;

  @IsString()
  @ApiProperty()
  securityAnswer: string;

  @IsString()
  @ApiProperty()
  securityQuestion: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsString()
  @IsBase64()
  @ApiProperty()
  utilityBillBase64: string;
}

// Request payload to process customer login request
export class CustomerLoginRequestDto{

  @IsString()
  @ApiProperty()
  queryValue: string;

  @IsString()
  @ApiProperty()
  password: string;
}

// Request payload for customer forgot password
export class ForgotPasswordRequestDto{
  @IsString()
  @ApiProperty()
  otp: string;

  @IsString()
  @ApiProperty()
  newPassword: string;
}
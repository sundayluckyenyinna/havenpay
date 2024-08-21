/* eslint-disable */

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumberString, IsString, Length } from "class-validator";

export class RegisterCustomerRequestDto{

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
  phoneNumber: string;

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
}

export class CustomerLoginRequestDto{

  @IsString()
  @ApiProperty()
  queryValue: string;

  @IsString()
  @ApiProperty()
  password: string;
}

export class ForgotPasswordRequestDto{
  @IsString()
  @ApiProperty()
  otp: string;

  @IsString()
  @ApiProperty()
  newPassword: string;
}
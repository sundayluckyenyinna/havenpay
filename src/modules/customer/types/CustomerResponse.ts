/*eslint-disable */

import { ApiProperty } from '@nestjs/swagger';

export class RegisterCustomerResponseDto {

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    middleName: string;
}


export class CustomerDetailDto{
    @ApiProperty()
    primaryAccountNumber: string;

    @ApiProperty()
    dateOfBirth: string;

    @ApiProperty()
    emailAddress: string;
}
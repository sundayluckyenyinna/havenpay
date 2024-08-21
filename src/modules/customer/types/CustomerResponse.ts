/*eslint-disable */

import { ApiProperty } from '@nestjs/swagger';
import { plainToClass } from "class-transformer";

export class RegisterCustomerResponse extends Object{

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    middleName: string;

    static fromJson(json: object){
        return plainToClass(RegisterCustomerResponse, json);
    }
}
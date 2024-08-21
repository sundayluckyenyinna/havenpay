/* eslint-disable */

import { HttpStatus, Injectable } from "@nestjs/common";
import PrismaRepository from "../../../config/db/PrismaRepository";
import { Customer } from "@prisma/client";
import { UserAlreadyExistsException, UserNotFoundException } from "../error/ValidationException";

@Injectable()
export default class UserValidationService {

   constructor(
     private readonly prismaRepository: PrismaRepository
   ) {}

   async validateUserUniquenessByMobileNumber(mobileNumber: string){
       const customer: Customer = await this.prismaRepository.customer.findUnique({ where: {
         phoneNumber: mobileNumber
       }});
       if(customer){
          throw new UserAlreadyExistsException(`User with mobileNumber ${mobileNumber} already exists`, HttpStatus.BAD_REQUEST);
       }
   }

   async validateUserExistencebyMobileNumber(mobileNumber: string){
     const customer: Customer = await this.prismaRepository.customer.findUnique({
       where: {
          phoneNumber: mobileNumber
       }
     });
     if(!customer){
       throw new UserNotFoundException(`No user record found for phone number: ${mobileNumber}`, HttpStatus.NOT_FOUND);
     }
   }
}
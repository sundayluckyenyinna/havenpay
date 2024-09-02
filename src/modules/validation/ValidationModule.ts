/* eslint-disable */

import { Module } from "@nestjs/common";
import UserValidationService from "./service/UserValidationService";
import PrismaRepository from "src/config/db/PrismaRepository";


@Module({
    providers: [ UserValidationService, PrismaRepository ],
    exports: [ UserValidationService ]
})
export default class ValidationModule{}
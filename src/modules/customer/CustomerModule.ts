import { Module } from "@nestjs/common";
import CustomerService from "./service/CustomerService";
import CustomerController from "./controller/CustomerController";
import PrismaRepository from "src/config/db/PrismaRepository";


@Module({
    controllers: [ CustomerController],
    providers: [ CustomerService, PrismaRepository]
})
export default class CustomerModule{}
import CustomerService from "../service/CustomerService";
import { RegisterCustomerRequestDto, SendOtpRequestDto } from "../dtos/CustomerDto";
import { RegisterCustomerResponseDto } from "../types/CustomerResponse";
import ServerApiResponse from "src/common/ServerApiResponse";
export default class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    processCustomerSignup(requestDto: SendOtpRequestDto): Promise<ServerApiResponse<string>>;
    processCustomerRegistration(requestDto: RegisterCustomerRequestDto): Promise<ServerApiResponse<RegisterCustomerResponseDto>>;
}

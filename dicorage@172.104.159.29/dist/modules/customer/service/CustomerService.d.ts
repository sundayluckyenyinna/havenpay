import PrismaRepository from "../../../config/db/PrismaRepository";
import ServerApiResponse from "src/common/ServerApiResponse";
import UserValidationService from "src/modules/validation/service/UserValidationService";
import { RegisterCustomerRequestDto, SendOtpRequestDto } from "../dtos/CustomerDto";
export default class CustomerService {
    private readonly prismaRepo;
    private readonly validationService;
    constructor(prismaRepo: PrismaRepository, validationService: UserValidationService);
    processSendCustomerOtp(requestDto: SendOtpRequestDto): Promise<ServerApiResponse<string>>;
    processCustomerRegistration(requestDto: RegisterCustomerRequestDto): Promise<ServerApiResponse<string>>;
}

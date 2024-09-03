import PrismaRepository from "../../../config/db/PrismaRepository";
export default class UserValidationService {
    private readonly prismaRepository;
    constructor(prismaRepository: PrismaRepository);
    validateUserUniquenessByMobileNumber(mobileNumber: string): Promise<void>;
    validateUserUniquenessByEmailAddress(email: string): Promise<void>;
    validateUserExistenceByMobileNumber(mobileNumber: string): Promise<void>;
}

import { MaritalStatus } from "@prisma/client";
export declare class SendOtpRequestDto {
    mobileNumber: string;
}
export declare class RegisterCustomerRequestDto {
    biometric: string;
    bvn: string;
    otp: string;
    fullName: string;
    mobileNumber: string;
    emailAddress: string;
    nin: string;
    referralCode: string;
    password: string;
    transactionPin: string;
    imei: string;
    localGovernment: string;
    maritalStatus: MaritalStatus;
    residentialAddress: string;
    securityAnswer: string;
    securityQuestion: string;
    state: string;
    utilityBillBase64: string;
}
export declare class CustomerLoginRequestDto {
    queryValue: string;
    password: string;
}
export declare class ForgotPasswordRequestDto {
    otp: string;
    newPassword: string;
}

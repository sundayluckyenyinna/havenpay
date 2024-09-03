export default class ServerApiResponse<T> {
    private responseCode;
    private responseMessage;
    private responseData;
    constructor(responseCode: string, responseMessage: string, responseData: T);
    static ofSuccess<T>(responseData: T): ServerApiResponse<T>;
}

/* eslint-disable */

export default interface OmnixResponse<T> {
    responseCode: string;
    responseMessage: string;
    responseData?: T;
    errors?: []
}
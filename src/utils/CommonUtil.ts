/*eslint-disable*/

export default class CommonUtil{

    static generateRequestId(): string{
        return String(new Date().getTime());
    }
}
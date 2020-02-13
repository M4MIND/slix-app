import {AbstractResponse} from "./AbstractResponse";

export class PageNotFoundResponse extends AbstractResponse {
    constructor(content: string = '', statusCode: number = AbstractResponse.HTTP_NOT_FOUND, headers: object = {}) {
        super(content, statusCode, headers);
    }
}
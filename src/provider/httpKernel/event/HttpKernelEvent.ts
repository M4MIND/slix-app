import {HttpKernelEventInterface} from "./HttpKernelEventInterface";
import {ResponseInterface} from "../../../core/response/ResponseInterface";

export abstract class HttpKernelEvent implements HttpKernelEventInterface {
    private _response?: ResponseInterface;

    protected constructor() {
        this.response = null;
    }

    get response(): ResponseInterface {
        return this._response;
    }

    set response(value: ResponseInterface) {
        this._response = value;
    }

    public hasResponse() {
        return this.response !== null;
    }
}
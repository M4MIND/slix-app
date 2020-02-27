import {ResponseInterface} from "../../../core/response/ResponseInterface";
import {Slix} from "../../../Slix";
import {Request} from "../../../core/request/Request";
import {EventDispatcherContract} from "../../../contracts/EventDispatcherContract";

export abstract class HttpKernelEvent implements EventDispatcherContract {
    private _response?: ResponseInterface;

    constructor(app: Slix, request: Request) {
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
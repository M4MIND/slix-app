import {Request} from "../../core/request/Request";
import {Response} from "../../core/response/Response";
import {Res} from "../../core/response/Res";

export class HttpKernel {
    public handle(request: Request): Response {
        return new Res();
    }
}
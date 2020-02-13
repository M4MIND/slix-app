import {Request} from "../../core/request/Request";
import {ResponseInterface} from "../../core/response/ResponseInterface";
import {Response} from "../../core/response/Response";
import {HttpKernelEventRequest} from "./event/HttpKernelEventRequest";

export class HttpKernel {
    public async handle(request: Request): Promise<ResponseInterface> {
        let event = new HttpKernelEventRequest();

        return new Response('Я шатал ваш рот')
    }
}
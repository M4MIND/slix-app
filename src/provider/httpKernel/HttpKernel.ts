import {Request} from "../../core/request/Request";
import {ResponseInterface} from "../../core/response/ResponseInterface";
import {Response} from "../../core/response/Response";
import {HttpKernelEventRequest} from "./event/HttpKernelEventRequest";
import {Slix} from "../../Slix";
import {EventDispatcher} from "../../core/event/EventDispatcher";
import {HttpKernelEvents} from "./HttpKernelEvents";

export class HttpKernel {
    private readonly app: Slix;
    private eventDispatcher: EventDispatcher;

    constructor(app: Slix, eventDispatcher: EventDispatcher) {
        this.app = app;
        this.eventDispatcher = eventDispatcher;
    }

    public async handle(request: Request): Promise<ResponseInterface> {
        let event = new HttpKernelEventRequest(this.app, request);
        this.eventDispatcher.dispatch(HttpKernelEvents.REQUEST, event);
        return new Response('Я шатал ваш рот');
    }
}
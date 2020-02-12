import {IncomingMessage} from "http";

export class Request {
    private incomingMessage: IncomingMessage;

    constructor(request: IncomingMessage) {
        this.incomingMessage = request;
    }
}
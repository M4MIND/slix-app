import {AbstractProtocol} from "./AbstractProtocol";
import {Slix} from "../../Slix";
import http, {ServerResponse} from 'http';
import {Request} from "../request/Request";

export class Http extends AbstractProtocol {
    boot(app: Slix, handler: (request: Request, response: ServerResponse) => void): void {
        http.createServer((request, response) => {
            handler(new Request(request), response);
        }).listen(app.get('request.http.port'), app.get('request.hostname'))
    }
}
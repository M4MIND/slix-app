import {AbstractProtocol} from "./AbstractProtocol";
import {Slix} from "../../Slix";
import http, {ServerResponse} from 'http';
import {Request} from "../request/Request";

export class Http extends AbstractProtocol {
    boot(app: Slix, handler: (request: Request, response: ServerResponse) => void): void {
        http.createServer((request, response) => {
            let body = [];

            request.on('data', data => {
                body.push(data);
            });

            request.on('end', () => {
                handler(new Request(request, Buffer.concat(body).toString()), response);
            });

            request.on('err', err => {
            })
        }).listen(app.get('request.http.port') || 3000, app.get('request.hostname') || '127.0.0.1')
    }
}
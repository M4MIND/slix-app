import {IncomingMessage} from "http";
import {RequestPath} from "./RequestPath";
import {RequestHeader} from "./RequestHeader";
import {RequestCookies} from "./cookie/RequestCookies";
import {RequestQuery} from "./RequestQuery";
import {RequestBody} from "./RequestBody";

export class Request {
    private readonly _incomingMessage: IncomingMessage;
    private readonly _url: string;
    private readonly _method: string;
    private readonly _path: RequestPath;
    private readonly _header: RequestHeader;
    private readonly _cookies: RequestCookies;
    private readonly _query: RequestQuery;
    private readonly _body: RequestBody;

    constructor(request: IncomingMessage, body: string) {
        this._url = request.url;
        this._method = request.method.toUpperCase();
        this._path = new RequestPath(request);
        this._header = new RequestHeader(request);
        this._cookies = new RequestCookies(request);
        this._query = new RequestQuery(request);
        this._body = new RequestBody(body);
    }

    get incomingMessage(): IncomingMessage {
        return this._incomingMessage;
    }

    get url(): string {
        return this._url;
    }

    get method(): string {
        return this._method;
    }

    get path(): RequestPath {
        return this._path;
    }

    get header(): RequestHeader {
        return this._header;
    }

    get cookies(): RequestCookies {
        return this._cookies;
    }

    get query(): RequestQuery {
        return this._query;
    }

    get body(): RequestBody {
        return this._body;
    }
}
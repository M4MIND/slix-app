import {IncomingMessage} from "http";
import {Cookie} from "./Cookie";

export class RequestCookies {
    private readonly cookies: Map<string, Cookie>;

    constructor(request: IncomingMessage) {
        this.cookies = new Map<string, Cookie>();

        if (request.headers.cookie) {
            for (let value of request.headers.cookie.split(';')) {
                let cookie = value.trim().split('=');
                this.cookies.set(cookie[0], new Cookie(cookie[0], cookie[1]));
            }
        }
    }

    public get(key): Cookie | null {
        return this.cookies.get(name) || null;
    }

    public has(key): boolean {
        return this.cookies.has(name);
    }

    public all(): Array<Cookie> {
        return [...this.cookies.values()];
    }
}
import {Slix} from "../../Slix";
import {Request} from "../request/Request";
import {ServerResponse} from "http";

export interface Protocol {
    boot(app: Slix, handler: (request: Request, response: ServerResponse) => void): void;
}
import {Protocol} from "./Protocol";
import {Slix} from "../../Slix";
import {Request} from "../request/Request";
import {ServerResponse} from "http";

export abstract class AbstractProtocol implements Protocol {
    public abstract boot(app: Slix, handler: (request: Request, response: ServerResponse) => void): void;
}
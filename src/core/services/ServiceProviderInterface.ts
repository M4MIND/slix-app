import {Slix} from "../../Slix";
import {EventDispatcher} from "../event/EventDispatcher";

export interface ServiceProviderInterface {
    getKey(): string;

    registration(app: Slix): void;

    boot(app: Slix): void;

    subscribe(app: Slix, eventDispatcher: EventDispatcher): void;
}
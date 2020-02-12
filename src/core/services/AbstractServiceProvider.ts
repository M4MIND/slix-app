import {ServiceProviderInterface} from "./ServiceProviderInterface";
import {Slix} from "../../Slix";
import {EventDispatcher} from "../event/EventDispatcher";

export abstract class AbstractServiceProvider implements ServiceProviderInterface {
    public getKey(): string {
        return this.constructor.name;
    }

    public registration(app: Slix): void {

    };

    public subscribe(app: Slix, eventDispatcher: EventDispatcher): void {

    }

    public boot(app: Slix): void {

    }
}
import {Slix} from "../../Slix";
import {EventDispatcherContract} from "../../contracts/EventDispatcherContract";

export class EventDispatcher {
    private app: Slix;
    private listeners: Object;

    constructor(app: Slix) {
        this.app = app;
    }

    subscribe(eventName: string, handler: () => void, priority: number = 0) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = {};
        }

        this.listeners[eventName][priority] = handler;
    }

    dispatch(eventName: string, event: EventDispatcherContract) {

    }
}
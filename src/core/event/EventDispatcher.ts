import {Slix} from "../../Slix";

export class EventDispatcher {
    private app: Slix;

    constructor(app: Slix) {
        this.app = app;
        this.app.set('eventDispatcher', new Map());
    }

    subscribe(event: string, handler: () => void, priority: number = 0) {

        if (!this.app.get('eventDispatcher').has(event)) {
            this.app.get('eventDispatcher').set(event, [])
        }

        this.app.get('eventDispatcher').get(event).push(handler);
    }

    dispatch() {

    }
}
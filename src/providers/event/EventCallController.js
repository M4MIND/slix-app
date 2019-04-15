import AbstractEvent from "../../api/AbstractEvent";

export default class EventCallController extends AbstractEvent {
    constructor(request, response, controller) {
        super(request, response);
        this._controller = controller.controller ? controller.controller : null;
        this._handlers = controller._handlers;
    }

    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }

    get handlers() {
        return this._handlers;
    }

    set handlers(value) {
        this._handlers = value;
    }
}
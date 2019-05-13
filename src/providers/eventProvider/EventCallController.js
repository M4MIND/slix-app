import AbstractEvent from '../../api/AbstractEvent';

export default class EventCallController extends AbstractEvent {
    constructor(request, controller) {
        super(request);
        this.controller = controller;
    }

    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }
}

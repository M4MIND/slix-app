import AbstractEvent from "../../api/AbstractEvent"

export default class EventException extends AbstractEvent {
    constructor(request, response, ex) {
        super(request, response);
        this._ex = ex
    }

    get ex() {
        return this._ex
    }

    set ex(value) {
        this._ex = value
    }
}
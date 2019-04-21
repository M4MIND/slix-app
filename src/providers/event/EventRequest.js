import Request from "../../core/request/Request"
import PreparationResponse from "../../core/response/PreparationResponse"
import AbstractEvent from "../../api/AbstractEvent"

export default class EventRequest extends AbstractEvent {
    constructor(request) {
        super(request);

        this.response = null;
    }

    get response() {
        return this._response;
    }

    set response(value) {
        this._response = value;
        this.break = true;
    }
}
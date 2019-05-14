import AbstractEvent from '../../api/AbstractEvent';

export default class EventResponse extends AbstractEvent {
    constructor(request, response) {
        super(request);
        this.response = response;
    }

    get response() {
        return this._response;
    }

    set response(value) {
        this._response = this._response ? this._response : value;
    }
}

import AbstractEvent from '../../api/AbstractEvent';

export default class EventRequest extends AbstractEvent {
  constructor(request) {
    super(request);
    this.response = undefined;
  }

  get response() {
    return this._response;
  }

  set response(value) {
    this._response = this._response ? this._response : value;
  }
}

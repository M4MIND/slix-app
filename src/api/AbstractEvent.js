import Request from '../core/request/SlixRequest';

export default class AbstractEvent {
  /**
   * @param {Request} request
   * */

  constructor(request) {
    this.break = false;
    this.request = request;
  }

  get break() {
    return this._break;
  }

  set break(value) {
    this._break = value;
  }

  get request() {
    return this._request;
  }

  set request(value) {
    this._request = value;
  }
}

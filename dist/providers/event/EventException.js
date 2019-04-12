"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

class EventException extends _AbstractEvent.default {
  constructor(request, response, ex) {
    super();
    this._request = request;
    this._response = response;
    this._ex = ex;
  }

  get request() {
    return this._request;
  }

  set request(value) {
    this._request = value;
  }

  get response() {
    return this._response;
  }

  set response(value) {
    this._response = value;
  }

  get ex() {
    return this._ex;
  }

  set ex(value) {
    this._ex = value;
  }

}

exports.default = EventException;
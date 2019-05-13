"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

class EventException extends _AbstractEvent.default {
  constructor(request, ex) {
    super(request);
    this.ex = ex;
    this.response = undefined;
  }

  get response() {
    return this._response;
  }

  set response(value) {
    this._response = this._response ? this._response : value;
  }

  get ex() {
    return this._ex;
  }

  set ex(value) {
    this._ex = value;
  }

}

exports.default = EventException;
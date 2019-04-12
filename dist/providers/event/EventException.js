"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

class EventException extends _AbstractEvent.default {
  constructor(request, response, ex) {
    super(request, response);
    this._ex = ex;
  }

  get ex() {
    return this._ex;
  }

  set ex(value) {
    this._ex = value;
  }

}

exports.default = EventException;
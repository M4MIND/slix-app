"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

class EventResponse extends _AbstractEvent.default {
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

exports.default = EventResponse;
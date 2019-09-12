'use strict';

exports.default = void 0;

var _AbstractEvent = require('../../api/AbstractEvent');

class EventRequest extends _AbstractEvent.default {
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

exports.default = EventRequest;

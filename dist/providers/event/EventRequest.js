"use strict";

exports.default = void 0;

var _Request = require("../../core/request/Request");

var _PreparationResponse = require("../../core/response/PreparationResponse");

var _AbstractEvent = require("../../api/AbstractEvent");

class EventRequest extends _AbstractEvent.default {
  constructor(request) {
    super(request);
    this.response = null;
  }

  get response() {
    return this._response;
  }

  set response(value) {
    this._response = this._response ? this._response : value;
  }

}

exports.default = EventRequest;
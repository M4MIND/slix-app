"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

class EventResponse extends _AbstractEvent.default {
  constructor(Request, Response) {
    super(Request, Response);
  }

}

exports.default = EventResponse;
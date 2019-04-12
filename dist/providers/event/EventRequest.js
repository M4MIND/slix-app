"use strict";

exports.default = void 0;

var _Request = require("../../core/request/Request");

var _PreparationResponse = require("../../core/response/PreparationResponse");

var _AbstractEvent = require("../../api/AbstractEvent");

class EventRequest extends _AbstractEvent.default {
  /**
   * @param {Request} request
   * @param {PreparationResponse} response
   * */
  constructor(request, response) {
    super(request, response);
  }

}

exports.default = EventRequest;
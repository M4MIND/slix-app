"use strict";

exports.default = void 0;

var _Request = require("../../core/request/Request");

var _PreparationResponse = require("../../core/response/PreparationResponse");

class EventRequest {
  /**
   * @param {Request} request
   * @param {PreparationResponse} response
   * */
  constructor(request, response) {
    this._request = request;
    this._response = response;
  }
  /** @return {Request} */


  get request() {
    return this._request;
  }
  /** @param {Request} value */


  set request(value) {
    this._request = value;
  }
  /** @return {PreparationResponse} */


  get response() {
    return this._response;
  }
  /** @param {PreparationResponse} value */


  set response(value) {
    this._response = value;
  }

}

exports.default = EventRequest;
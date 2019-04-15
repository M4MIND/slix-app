"use strict";

exports.default = void 0;

var _Request = require("../core/request/Request");

class AbstractEvent {
  /**
   * @param {Request} request
   * @param {PreparationResponse} response
   * */
  constructor(request, response) {
    this._break = false;
    this._request = request;
    this._response = response;
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

  get response() {
    return this._response;
  }

  set response(value) {
    this._response = value;
  }

  setResponse(response) {
    this.breakEvent();
    this.response.setResponse(response);
  }

  breakEvent() {
    this._break = true;
  }

}

exports.default = AbstractEvent;
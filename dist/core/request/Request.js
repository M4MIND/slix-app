"use strict";

exports.default = void 0;

function _http() {
  const data = require("http");

  _http = function () {
    return data;
  };

  return data;
}

class Request {
  /** @param {IncomingMessage} req */
  constructor(req) {
    this._req = req;
  }
  /** @return {IncomingMessage} */


  get req() {
    return this._req;
  }
  /** @param {IncomingMessage} value */


  set req(value) {
    this._req = value;
  }
  /** @return {string} */


  getUri() {
    return this.req.url;
  }

}

exports.default = Request;
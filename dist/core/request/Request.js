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
    this.req = req;
  }

}

exports.default = Request;
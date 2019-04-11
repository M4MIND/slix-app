"use strict";

exports.default = void 0;

function _http() {
  const data = require("http");

  _http = function () {
    return data;
  };

  return data;
}

class PreparationResponse {
  /** @param {ServerResponse} res */
  constructor(res) {
    this._res = res;
  }
  /** @return {ServerResponse} */


  get res() {
    return this._res;
  }
  /** @param {ServerResponse} value */


  set res(value) {
    this._res = value;
  }

}

exports.default = PreparationResponse;
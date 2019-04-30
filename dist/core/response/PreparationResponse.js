"use strict";

exports.default = void 0;

function _http() {
  const data = require("http");

  _http = function () {
    return data;
  };

  return data;
}

var _FileResponse = require("./FileResponse");

var _RedirectResponse = require("./RedirectResponse");

var _Response = require("./Response");

var _JsonResponse = require("./JsonResponse");

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
    if (this._res) {
      return;
    }

    this._res = value;
  }
  /** @param {Response|RedirectResponse|JsonResponse|FileResponse} response */


  setResponse(response) {
    this.res.writeHead(response.statusCode, response.headers.preparationHeaders());
    this.res;
    this.write(response.content);
  }
  /** @param {string} value */


  write(value) {
    this.res.end(value);
  }

}

exports.default = PreparationResponse;
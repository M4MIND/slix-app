"use strict";

exports.default = void 0;

function _http() {
  const data = require("http");

  _http = function () {
    return data;
  };

  return data;
}

class RequestCookie {
  /** @param {IncomingMessage} request */
  constructor(request) {
    this.collection = new Map();

    if (request.headers.cookie) {
      for (let value of request.headers.cookie.split(';')) {
        value = value.trim().split('=');
        this.collection.set(value[0], value[1]);
      }

      delete request.headers.cookie;
    }
  }
  /** @param {string} name */


  get(name) {
    return this.collection.get(name);
  }
  /** @param {string} name */


  has(name) {
    return this.collection.has(name);
  }

}

exports.default = RequestCookie;
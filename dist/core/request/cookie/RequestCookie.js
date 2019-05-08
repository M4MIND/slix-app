"use strict";

exports.default = void 0;

var _Cookie = require("../../cookie/Cookie");

var _Request = require("../Request");

class RequestCookie {
  /** @param {Request} request */
  constructor(request) {
    /** @type {Map<string, Cookie>} */
    this.collection = new Map();

    if (request.header.all().cookie) {
      for (let value of request.header.all().cookie.split(';')) {
        value = value.trim().split('=');
        this.collection.set(value[0], new _Cookie.default(value[0], value[1]));
      }
    }
  }
  /** @param {Cookie} name */


  get(name) {
    return this.collection.get(name);
  }
  /** @param {string} name */


  has(name) {
    return this.collection.has(name);
  }
  /** @return {Array<Cookie>}*/


  all() {
    return [...this.collection.values()];
  }

}

exports.default = RequestCookie;
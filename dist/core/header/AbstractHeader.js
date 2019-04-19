"use strict";

exports.default = void 0;

class AbstractHeader {
  constructor(headers) {
    this._headers = headers;
  }

  get headers() {
    return this._headers;
  }

  set headers(value) {
    this._headers = value;
  }
  /**
   * @param {string} key
   * @param {string} value
   * */


  set(key, value) {
    this.headers[key] = value;
  }

  setContentType(value) {
    this.headers['Content-Type'] = value;
  }

  getAll() {
    return this.headers;
  }

}

exports.default = AbstractHeader;
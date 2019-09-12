'use strict';

exports.default = void 0;

class AbstractHeader {
  constructor(headers) {
    this.headers = headers;
  }
  /** @return {Object} */

  get headers() {
    return this._headers;
  }
  /** @param {Object} value */

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
  /** @param {string} name */

  get(name) {
    return this.headers[name] || null;
  }
  /** @return {boolean} */

  has(name) {
    return this.headers.hasOwnProperty(name);
  }
  /** @return {Object} */

  all() {
    return this.headers;
  }
}

exports.default = AbstractHeader;

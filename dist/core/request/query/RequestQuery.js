'use strict';

exports.default = void 0;

var _SlixRequest = require('../SlixRequest');

class RequestQuery {
  /**  @param {Request} request */
  constructor(request) {
    this.full = request.url.match(new RegExp('(?<=\\?)([^#]*)|$', 'g'))[0];
    this.collection = this.full;
  }
  /** @return {string} */

  get full() {
    return this._full;
  }
  /** @param {string} value */

  set full(value) {
    this._full = value;
  }
  /** @return {Map<string, string>} */

  get collection() {
    return this._collection;
  }
  /** @param {string} value */

  set collection(value) {
    let query = new Map();

    if (value) {
      for (let chunk of value.split('&')) {
        chunk = chunk.split('=');
        query.set(chunk[0], chunk[1]);
      }
    }

    this._collection = query;
  }
  /** @return {string|?} */

  get(key) {
    return this.collection.get(key);
  }
  /** @return {boolean} */

  has(key) {
    return this.collection.has(key);
  }
  /** @return {Object} */

  all() {
    let Object = {};
    this.collection.forEach((value, key) => {
      Object[key] = value;
    });
    return Object;
  }
}

exports.default = RequestQuery;

'use strict';

exports.default = void 0;

var _Response = require('./Response');

class JsonResponse extends _Response.default {
  /** @param {Object|string} content*/
  constructor(content) {
    super(typeof content === 'object' ? JSON.stringify(content) : content);
    this.setContentType(_Response.default.ContentType.json);
    return this;
  }
}

exports.default = JsonResponse;

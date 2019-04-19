"use strict";

exports.default = void 0;

var _ResponseHeader = require("./header/ResponseHeader");

class Response {
  /**
   * @param {string} content
   * @param {number} statusCode
   * @param {Object} headers
   * */
  constructor(content = '', statusCode = this.constructor.HTTP_OK, headers = {}) {
    this.headers = new _ResponseHeader.default(headers);
    this.content = content;
    this.statusCode = statusCode;
    return this;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  get statusCode() {
    return this._statusCode;
  }

  set statusCode(value) {
    this._statusCode = value;
  }

  get headers() {
    return this._headers;
  }

  set headers(value) {
    this._headers = value;
  }

  setContentType(value) {
    this.headers['Content-Type'] = value;
    return this;
  }

}

exports.default = Response;
Response.HTTP_OK = 200;
Response.HTTP_FOUND = 302;
Response.ContentType = {
  css: 'text/css',
  js: 'text/javascript',
  json: 'application/json',
  png: 'image/png',
  jpg: 'image/jpg'
};
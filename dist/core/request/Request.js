"use strict";

exports.default = void 0;

function _http() {
  const data = require("http");

  _http = function () {
    return data;
  };

  return data;
}

var _RequestCookie = require("./cookie/RequestCookie");

var _RequestHeader = require("./headers/RequestHeader");

var _RequestQuery = require("./query/RequestQuery");

class Request {
  /** @param {IncomingMessage} req */
  constructor(req) {
    this.req = req;
    this.url = req.url;
    this._path = this.url.match(new RegExp('([^?#]*)', 'g'))[0];
    this.method = req.method.toUpperCase();
    this.cookie = new _RequestCookie.default(this.req);
    this.header = new _RequestHeader.default(this.req);
    this.query = new _RequestQuery.default();
  }
  /** @return {IncomingMessage} */


  get req() {
    return this._req;
  }
  /** @param {IncomingMessage} value */


  set req(value) {
    this._req = value;
  }
  /** @return {RequestCookie} */


  get cookie() {
    return this._cookie;
  }
  /** @param {RequestCookie} value */


  set cookie(value) {
    this._cookie = value;
  }
  /** @return {RequestHeader} */


  get header() {
    return this._header;
  }
  /** @param {RequestHeader} value */


  set header(value) {
    this._header = value;
  }
  /** @return {string} */


  get url() {
    return this._url;
  }
  /** @param {string} value */


  set url(value) {
    this._url = value;
  }
  /** @return {string} */


  get method() {
    return this._method;
  }
  /** @param {string} value */


  set method(value) {
    this._method = value;
  }

  get query() {
    return this._query;
  }

  set query(value) {
    this._query = value;
  }
  /** @return {string} */


  get path() {
    return this._path;
  }
  /** @param {string} value */


  set path(value) {
    this._path = value;
  }

}

exports.default = Request;
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

var _RequestPath = require("./path/RequestPath");

var _RequestFile = require("./file/RequestFile");

var _RequestPost = require("./post/RequestPost");

class Request {
  /** @param {IncomingMessage} req */
  constructor(req) {
    this.req = req;
    this.url = req.url;
    this.method = req.method.toUpperCase();
    this.path = new _RequestPath.default(this);
    this.header = new _RequestHeader.default(this);
    this.contentType = this.header.get('content-type');
    this.cookie = new _RequestCookie.default(this);
    this.query = new _RequestQuery.default(this);
    this.post = new _RequestPost.default(this);
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
  /** @return {RequestQuery} */


  get query() {
    return this._query;
  }
  /** @param {RequestQuery} value */


  set query(value) {
    this._query = value;
  }
  /** @return {RequestPath} */


  get path() {
    return this._path;
  }
  /** @param {RequestPath} value */


  set path(value) {
    this._path = value;
  }
  /** @return {RequestPost} */


  get post() {
    return this._post;
  }
  /** @param {RequestPost} value */


  set post(value) {
    this._post = value;
  }
  /** @return {RequestFile} */


  get file() {
    return this._file;
  }
  /** @param {RequestFile} value */


  set file(value) {
    this._file = value;
  }

}

exports.default = Request;
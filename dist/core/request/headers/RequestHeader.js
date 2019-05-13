"use strict";

exports.default = void 0;

var _AbstractHeader = require("../../header/AbstractHeader");

var _SlixRequest = require("../SlixRequest");

class RequestHeader extends _AbstractHeader.default {
  /** @param {Request} request */
  constructor(request) {
    super(request.req.headers);
  }

}

exports.default = RequestHeader;
"use strict";

exports.default = void 0;

var _AbstractHeader = require("../../header/AbstractHeader");

var _Request = require("../Request");

class RequestHeader extends _AbstractHeader.default {
  /** @param {Request} request */
  constructor(request) {
    super(request.req.headers);
  }

}

exports.default = RequestHeader;
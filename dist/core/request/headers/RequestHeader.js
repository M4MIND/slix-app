"use strict";

exports.default = void 0;

var _AbstractHeader = require("../../header/AbstractHeader");

class RequestHeader extends _AbstractHeader.default {
  /** @param {IncomingMessage} request */
  constructor(request) {
    super(request.headers);
  }

}

exports.default = RequestHeader;
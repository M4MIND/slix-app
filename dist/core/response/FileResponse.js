"use strict";

exports.default = void 0;

var _Response = require("./Response");

class FileResponse extends _Response.default {
  constructor(content, contentType) {
    super(content, 200, {
      'Content-Type': contentType
    });
  }

}

exports.default = FileResponse;
"use strict";

exports.default = void 0;

var _Response = require("./Response");

class FileResponse extends _Response.default {
  /**
   * @param {string} content
   * @param {string} contentType
   * */
  constructor(content, contentType) {
    super(content);
    this.headers.setContentType(contentType);
    return this;
  }

}

exports.default = FileResponse;
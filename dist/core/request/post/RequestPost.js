"use strict";

exports.default = void 0;

var _Request = require("../Request");

class RequestPost {
  /** @param {Request} request */
  constructor(request) {
    console.dir(request.req.body.toString('utf8').match(new RegExp('Content-Disposition: .*', 'gm')));
  }

}

exports.default = RequestPost;
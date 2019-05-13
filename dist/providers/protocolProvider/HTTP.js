"use strict";

exports.default = void 0;

function _http() {
  const data = require("http");

  _http = function () {
    return data;
  };

  return data;
}

var _SlixRequest = require("../../core/request/SlixRequest");

var _PreparationResponse = require("../../core/response/PreparationResponse");

class HTTP {
  /**
   * @param {{
   *     host:string
   *     port:number
   *     callback: function
   * }} config
   * */
  constructor(config) {
    this.http = (0, _http().createServer)(async (req, res) => {
      let body = [];
      req.on('err', err => {
        throw new Error(err);
      }).on('data', data => {
        body.push(data);
      }).on('end', () => {
        req.body = Buffer.concat(body);

        let _Request = new _SlixRequest.default(req);

        let _Response = new _PreparationResponse.default(res, _Request);

        config.processingRequest(null, _Request, _Response);
      });
    });
    this.http.listen({
      port: config.port,
      host: config.host
    });
  }

}

exports.default = HTTP;
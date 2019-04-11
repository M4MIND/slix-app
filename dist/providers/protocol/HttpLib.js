"use strict";

exports.default = void 0;

function _HttpLib() {
  const data = require("src/providers/protocol/HttpLib");

  _HttpLib = function () {
    return data;
  };

  return data;
}

class HTTP {
  /**
   * @param {{
   *     host:string
   *     port:number
   *     callback: function
   * }} config
   * */
  constructor(config) {
    console.dir(_HttpLib().default);
    this.http = _HttpLib().default.createServer((req, res) => {
      let body = [];
      req.on('err', err => {}).on('data', data => {
        body.push(data);
      }).on('end', () => {
        req.body = body;
        config.callback(req, res);
      });
    });
    this.http.listen({
      port: config.host,
      host: config.host
    });
  }

}

exports.default = HTTP;
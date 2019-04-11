"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _HTTP = require("./protocol/HTTP");

var _Request = require("../core/request/Request");

var _PreparationResponse = require("../core/response/PreparationResponse");

var _KernelEvents = require("./event/KernelEvents");

var _EventRequest = require("./event/EventRequest");

/**
 * @export
 * @class ProtocolServiceProvider
 * */
class ProtocolServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      protocol: _HTTP.default,
      host: 'localhost',
      port: 3000
    });
  }

  boot(App) {
    this.config = App.getParam(this.getName());
    /**
     * @callback
     * @param {Request} request
     * @param {PreparationResponse} response
     * */

    this.config.callback = async (request, response) => {
      App['dispatch'](_KernelEvents.default.REQUEST(), new _EventRequest.default(request, response));
      response.res.end(JSON.stringify({
        PARAMS: App.getAllParams(),
        SLIX: App
      }));
    };
    /** @type {HTTP} */


    new this.config.protocol(this.config);
  }

}

exports.default = ProtocolServiceProvider;
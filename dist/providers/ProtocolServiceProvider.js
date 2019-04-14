"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _HTTP = require("./protocol/HTTP");

var _Request = require("../core/request/Request");

var _PreparationResponse = require("../core/response/PreparationResponse");

var _KernelEvents = require("./event/KernelEvents");

var _EventRequest = require("./event/EventRequest");

var _Log = require("./logger/Log");

var _EventException = require("./event/EventException");

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
     * @param {*} err
     * @param {Request} request
     * @param {PreparationResponse} response
     * */

    this.config.callback = async (err = null, request, response) => {
      try {
        if (err) {
          App.log(err, _Log.default.ERROR());
        }

        let event = await App.dispatch(_KernelEvents.default.REQUEST(), new _EventRequest.default(request, response));
        if (event.break) return;
        await App.dispatch(_KernelEvents.default.ROUTE(), '');
        await App.dispatch(_KernelEvents.default.CONTROLLER(), '');
        await App.dispatch(_KernelEvents.default.RESPONSE(), '');
        response.setResponse((await App.render('index', {
          title: 'test'
        })));
      } catch (e) {
        App.log(e.message, _Log.default.ERROR());
        await await App.dispatch(_KernelEvents.default.EXCEPTION(), new _EventException.default(request, response, e));
      }
    };
    /** @type {HTTP} */


    new this.config.protocol(this.config);
  }

}

exports.default = ProtocolServiceProvider;
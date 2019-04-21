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

var _EventCallController = require("./event/EventCallController");

var _EventResponse = require("./event/EventResponse");

var _EventControllerArguments = require("./event/EventControllerArguments");

var _Response = require("../core/response/Response");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @export
 * @class ProtocolServiceProvider
 * */
class ProtocolServiceProvider extends _AbstractProvider.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "processingRequest", async (err, request, preparationResponse) => {
      preparationResponse.setResponse((await this.handleRaw(request)));
    });

    _defineProperty(this, "handleRaw", async request => {
      try {
        let $event = new _EventRequest.default(request);
        await this.App.dispatch(_KernelEvents.default.REQUEST, $event);

        if ($event.response) {
          return this.filterResponse(request, $event.response);
        }

        let controller = this.App._getController(request);

        if (!controller) {
          throw new Error(`Unable to find the controller for path "${request.url}". The route is wrongly configured.`);
        }

        $event = new _EventCallController.default(request, controller);
        this.App.dispatch(_KernelEvents.default.CALL_CONTROLLER, $event);
        controller = $event.controller;
        $event = new _EventControllerArguments.default(request, controller);
        this.App.dispatch(_KernelEvents.default.CONTROLLER_ARGUMENTS, $event);
        controller = $event.controller;
        let response = await this.App._runControllers(controller, request);
        return this.filterResponse(request, response);
      } catch (e) {
        let $event = new _EventException.default(request, e);
        await this.App.dispatch(_KernelEvents.default.EXCEPTION, $event);

        if ($event.response) {
          return this.filterResponse(request, $event.response);
        }

        return this.filterResponse(request, new _Response.default('Error', 500));
      }
    });
  }

  registration(App) {
    this.App = App;
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
     * @param {PreparationResponse} preparationResponse
     * */

    this.config.callback = async (request, preparationResponse) => {
      try {
        let $event = new _EventRequest.default(request);

        if ($event.request) {
          return this.filterResponse(request, preparationResponse);
        }
      } catch (e) {
        console.dir(e);
      }
      /*try {
          let event = await App.dispatch(KernelEvents.REQUEST, new EventRequest(request));
            if (!preparationResponse.response) {
                let controllers = App._getController(request);
                event = await App.dispatch(KernelEvents.CALL_CONTROLLER, new EventCallController(request, preparationResponse, controllers));
                let controllerResponse = await App._runControllers(controllers, request);
                await App.dispatch(KernelEvents.RESPONSE, new EventResponse(request, controllerResponse));
                preparationResponse.setResponse(controllerResponse);
          }
            preparationResponse.end();
      }
      catch (e) {
          App.log(e.message, Log.ERROR());
          await await App.dispatch(KernelEvents.EXCEPTION, new EventException(request, preparationResponse, e));
      }*/

    };
    /**
     * @callback
     * @param {*} err
     * @param {Request} request
     * @param {PreparationResponse} preparationResponse
     * */


    this.config.processingRequest = this.processingRequest;
    /** @type {HTTP} */

    new this.config.protocol(this.config);
  }

  filterResponse(request, response) {
    let $event = new _EventResponse.default(request, response);
    this.App.dispatch(_KernelEvents.default.RESPONSE, $event);
    this.finishRequest(request);
    return $event.response;
  }

  finishRequest(request) {}

}

exports.default = ProtocolServiceProvider;
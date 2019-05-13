'use strict';

exports.default = void 0;

var _AbstractProvider = require('../api/AbstractProvider');

var _HTTP = require('./protocolServiceProvider/HTTP');

var _Request = require('../core/request/Request');

var _KernelEvents = require('./eventServiceProvider/KernelEvents');

var _EventRequest = require('./eventServiceProvider/EventRequest');

var _EventException = require('./eventServiceProvider/EventException');

var _EventCallController = require('./eventServiceProvider/EventCallController');

var _EventResponse = require('./eventServiceProvider/EventResponse');

var _EventControllerArguments = require('./eventServiceProvider/EventControllerArguments');

var _Response = require('../core/response/Response');

var _EventTerminate = require('./eventServiceProvider/EventTerminate');

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

const config = {
    protocol: 'http',
    host: 'localhost',
    port: 10000,
};
/**
 * @export
 * @class ProtocolServiceProvider
 * */

class ProtocolServiceProvider extends _AbstractProvider.default {
    constructor(...args) {
        super(...args);

        _defineProperty(
            this,
            'processingRequest',
            async (err, request, preparationResponse) => {
                preparationResponse.setResponse(await this.handleRaw(request));
            }
        );

        _defineProperty(this, 'handleRaw', async (request) => {
            try {
                let $event = new _EventRequest.default(request);
                await this.App.dispatch(_KernelEvents.default.REQUEST, $event);

                if ($event.response) {
                    return await this.filterResponse(request, $event.response);
                }

                let controller = this.App._getController(request);

                if (!controller) {
                    throw new Error(
                        `Unable to find the controller for path "${
                            request.url
                        }". The route is wrongly configured.`
                    );
                }

                $event = new _EventCallController.default(request, controller);
                this.App.dispatch(
                    _KernelEvents.default.CALL_CONTROLLER,
                    $event
                );
                controller = $event.controller;
                $event = new _EventControllerArguments.default(
                    request,
                    controller
                );
                this.App.dispatch(
                    _KernelEvents.default.CONTROLLER_ARGUMENTS,
                    $event
                );
                controller = $event.controller;
                let response = await this.App._runControllers(
                    controller,
                    request
                );
                return await this.filterResponse(request, response);
            } catch (e) {
                let $event = new _EventException.default(request, e);
                await this.App.dispatch(
                    _KernelEvents.default.EXCEPTION,
                    $event
                );

                if ($event.response) {
                    return await this.filterResponse(request, $event.response);
                }

                return await this.filterResponse(
                    request,
                    new _Response.default('Error', 500)
                );
            }
        });

        _defineProperty(this, 'filterResponse', async (request, response) => {
            if (!response) {
                throw new Error('Response object not found!');
            }

            let $event = new _EventResponse.default(request, response);
            await this.App.dispatch(_KernelEvents.default.RESPONSE, $event);
            await this.finishRequest(request);
            return $event.response;
        });

        _defineProperty(this, 'finishRequest', async (request) => {
            let $event = new _EventTerminate.default(request);
            await this.App.dispatch(_KernelEvents.default.TERMINATE, $event);
        });
    }

    registration(App) {
        App.setParam(this.getName(), config);
        this.App = App;
        this.config = App.getParam(this.getName());
    }

    boot(App) {
        this.config.processingRequest = this.processingRequest;

        if (this.config.protocol === 'http') {
            new _HTTP.default(this.config);
        }
    }
}

exports.default = ProtocolServiceProvider;

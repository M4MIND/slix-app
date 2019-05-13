import AbstractProvider from '../api/AbstractProvider';
import HTTP from './protocolServiceProvider/HTTP';
import Request from '../core/request/Request';
import KernelEvents from './eventServiceProvider/KernelEvents';
import EventRequest from './eventServiceProvider/EventRequest';
import EventException from './eventServiceProvider/EventException';
import EventCallController from './eventServiceProvider/EventCallController';
import EventResponse from './eventServiceProvider/EventResponse';
import EventControllerArguments from './eventServiceProvider/EventControllerArguments';
import Response from '../core/response/Response';
import EventTerminate from './eventServiceProvider/EventTerminate';

import config from './protocolServiceProvider/config.json';

/**
 * @export
 * @class ProtocolServiceProvider
 * */
export default class ProtocolServiceProvider extends AbstractProvider {
    registration(App) {
        App.setParam(this.getName(), config);
        this.App = App;
        this.config = App.getParam(this.getName());
    }

    boot(App) {
        this.config.processingRequest = this.processingRequest;
        if (this.config.protocol === 'http') {
            new HTTP(this.config);
        }
    }

    processingRequest = async (err, request, preparationResponse) => {
        preparationResponse.setResponse(await this.handleRaw(request));
    };

    /**
     * @callback
     * @param {Request} request
     * */
    handleRaw = async (request) => {
        try {
            let $event = new EventRequest(request);
            await this.App.dispatch(KernelEvents.REQUEST, $event);

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

            $event = new EventCallController(request, controller);
            this.App.dispatch(KernelEvents.CALL_CONTROLLER, $event);
            controller = $event.controller;

            $event = new EventControllerArguments(request, controller);
            this.App.dispatch(KernelEvents.CONTROLLER_ARGUMENTS, $event);

            controller = $event.controller;

            let response = await this.App._runControllers(controller, request);

            return await this.filterResponse(request, response);
        } catch (e) {
            let $event = new EventException(request, e);
            await this.App.dispatch(KernelEvents.EXCEPTION, $event);

            if ($event.response) {
                return await this.filterResponse(request, $event.response);
            }

            return await this.filterResponse(
                request,
                new Response('Error', 500)
            );
        }
    };

    filterResponse = async (request, response) => {
        if (!response) {
            throw new Error('Response object not found!');
        }
        let $event = new EventResponse(request, response);
        await this.App.dispatch(KernelEvents.RESPONSE, $event);
        await this.finishRequest(request);

        return $event.response;
    };

    finishRequest = async (request) => {
        let $event = new EventTerminate(request);

        await this.App.dispatch(KernelEvents.TERMINATE, $event);
    };
}

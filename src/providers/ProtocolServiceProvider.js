import AbstractProvider from "../api/AbstractProvider"
import HTTP from "./protocol/HTTP";
import Request from "../core/request/Request"
import PreparationResponse from "../core/response/PreparationResponse"
import KernelEvents from "./event/KernelEvents"
import EventRequest from "./event/EventRequest"
import Log from "./logger/Log"
import EventException from "./event/EventException"
import EventCallController from "./event/EventCallController";

/**
 * @export
 * @class ProtocolServiceProvider
 * */
export default class ProtocolServiceProvider extends AbstractProvider {
    registration(App) {
        App.setParam(this.getName(), {
            protocol: HTTP,
            host: 'localhost',
            port: 3000
        })
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
                let event  = await App.dispatch(KernelEvents.REQUEST(), new EventRequest(request, response));
                if (event.break) return;

                let controllers = App._getController(request);

                event = await App.dispatch(KernelEvents.CALL_CONTROLLER(), new EventCallController(request, response, controllers));
                if (event.break) return;

                let controllerResponse = await App._runControllers(controllers, request);

                await App.dispatch(KernelEvents.RESPONSE(), '');

                response.setResponse(controllerResponse);
            }
            catch (e) {
                App.log(e.message, Log.ERROR());
                await await App.dispatch(KernelEvents.EXCEPTION(), new EventException(request, response, e));
            }
        };
        /** @type {HTTP} */
        new this.config.protocol(this.config);
    }
}
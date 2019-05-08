import AbstractProvider from "../api/AbstractProvider"
import HTTP from "./protocol/HTTP";
import Request from "../core/request/Request"
import KernelEvents from "./event/KernelEvents"
import EventRequest from "./event/EventRequest"
import EventException from "./event/EventException"
import EventCallController from "./event/EventCallController";
import EventResponse from "./event/EventResponse";
import EventControllerArguments from "./event/EventControllerArguments";
import Response from "../core/response/Response";
import EventTerminate from "./event/EventTerminate"

/**
 * @export
 * @class ProtocolServiceProvider
 * */
export default class ProtocolServiceProvider extends AbstractProvider {
	registration(App) {
		this.App = App;

		App.setParam(this.getName(), {
			protocol: HTTP,
			host: 'localhost',
			port: 3000
		});
	}

	boot(App) {
		this.config = App.getParam(this.getName());
		this.config.processingRequest = this.processingRequest;
		new this.config.protocol(this.config);
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
				throw new Error(`Unable to find the controller for path "${request.url}". The route is wrongly configured.`)
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

			return await this.filterResponse(request, new Response('Error', 500));
		}
	};

	filterResponse = async (request, response) => {
		if (!response) throw new Error('Response object not found!');
		let $event = new EventResponse(request, response);
		await this.App.dispatch(KernelEvents.RESPONSE, $event);
		await this.finishRequest(request);

		return $event.response;
	};

	finishRequest = async (request) => {
		let $event = new EventTerminate(request);

		await this.App.dispatch(KernelEvents.TERMINATE, $event);
	}
}
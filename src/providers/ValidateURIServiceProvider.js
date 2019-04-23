import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"
import Validator from "./validator/Validator"
import Response from "../core/response/Response"

export default class ValidateURIServiceProvider extends AbstractProvider {
	registration(App) {
	}

	subscribe(App, EventDispatcher) {
		EventDispatcher.addEventListener(KernelEvents.REQUEST, event => {
			if (!Validator.validatePath(event.request.url)) {
				event.response = new Response('Url validator');
			}
		}, -999, this);
	}
}
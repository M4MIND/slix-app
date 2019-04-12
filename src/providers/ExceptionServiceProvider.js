import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"

export default class ExceptionServiceProvider extends AbstractProvider {
	subscribe(App, EventDispatcher) {
		EventDispatcher.addEventListener(KernelEvents.EXCEPTION(), (event) => {
			console.log(event.ex);

			event.response.res.writeHead(502);
			event.response.res.end(`<h1>${event.ex.name}</h1><pre style="border: 1px solid #eeeeee; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`);

			return event;
		}, -10)
	}
}
import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"
import Log from "./logger/Log"
import Response from "../core/response/Response"

export default class ExceptionServiceProvider extends AbstractProvider {
    subscribe(App, EventDispatcher) {
        EventDispatcher.addEventListener(KernelEvents.EXCEPTION, async (event) => {
            App.log(event.ex, Log.ERROR());
            if (App.get('DEBUG')) {
				event.response =
					new Response(`<h1>${event.ex.name}</h1><pre style="border: 1px solid #EEE; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`, 500);
			}
			else {
			    event.response = new Response('<h1>Error</h1>', Response.HTTP_INTERNAL_SERVER_ERROR);
            }
        }, -10)
    }
}
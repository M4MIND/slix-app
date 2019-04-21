import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"
import Log from "./logger/Log"
import Response from "../core/response/Response"

export default class ExceptionServiceProvider extends AbstractProvider {
    subscribe(App, EventDispatcher) {
        EventDispatcher.addEventListener(KernelEvents.EXCEPTION, async (event) => {
            App.log(event.ex, Log.WARNING());
            event.response = new Response(`<h1>${event.ex.name}</h1><pre style="border: 1px solid #EEE; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`, 500);

        }, -10)
    }
}
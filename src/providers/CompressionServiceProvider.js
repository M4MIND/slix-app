import AbstractProvider from "../api/AbstractProvider";
import KernelEvents from "./event/KernelEvents";

let zlibLib = require('zlib');

export default class CompressionServiceProvider extends AbstractProvider {
    subscribe(App, EventDispatcher) {
        EventDispatcher.addEventListener(KernelEvents.RESPONSE, (event) => {
            return event;
        }, -20, this);
    }
}
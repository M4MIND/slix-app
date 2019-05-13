import AbstractProvider from '../api/AbstractProvider';
import Log from './loggerProvider/Log';
import KernelEvents from "./eventProvider/KernelEvents";

import config from './loggerProvider/config.json';

export default class LoggerProvider extends AbstractProvider {
    registration(App) {
        App.setParam(this.getName(), config);
    }

    boot(App) {
        App.set('log', (message, level = Log.DEFAULT()) => {
            if (App.getParam(this.getName()).console) {
                Log.console(message, level);
            }
        });
    }

    subscribe(App, EventDispatcher) {
        EventDispatcher.addEventListener(KernelEvents.REQUEST, (Event) => {
            App.log(`${Event.request.method}: ${Event.request.url}`, Log.INFO());
        });

        EventDispatcher.addEventListener(KernelEvents.CALL_CONTROLLER, (Event) => {
            App.log(`Handler [${Event.controller.controller.constructor.name}] => ${Event.controller.pattern}`, Log.INFO());
        });

        EventDispatcher.addEventListener(KernelEvents.EXCEPTION, (Event) => {
            App.log(`${Event.ex.message}`, Log.ERROR());
        });
    }
}

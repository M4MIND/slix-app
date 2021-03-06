import AbstractProvider from '../api/AbstractProvider';
import Log from './loggerProvider/Log';
import KernelEvents from './eventProvider/KernelEvents';

export default class LoggerProvider extends AbstractProvider {
  async registration(App) {}

  async boot(App) {
    App.set('log', (message, level = Log.DEFAULT) => {
      if (App.getParam(this.getName()).console) {
        Log.console(message, level);
      }
    });
  }

  async subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(
      KernelEvents.REQUEST,
      (Event) => {
        Event.request.time = Date.now();
        Event.request.log = `[${Event.request.method} : '${Event.request.url}']`;
      },
      -99
    );

    EventDispatcher.addEventListener(
      KernelEvents.CALL_CONTROLLER,
      (Event) => {
        if (Event.controller.controller !== null) {
          Event.request.log += ` [Controller: ${Event.controller.controller.constructor.name} '${Event.controller.pattern}']`;
        }
      },
      99
    );

    EventDispatcher.addEventListener(
      KernelEvents.EXCEPTION,
      (Event) => {
        App.log(`${Event.ex.message}`, Log.ERROR);
      },
      -99
    );

    EventDispatcher.addEventListener(
      KernelEvents.TERMINATE,
      (Event) => {
        if (Event.request.log) {
          Event.request.log += ` [time: '${Date.now() - Event.request.time}ms']`;
          App.log(Event.request.log, Log.INFO);
        }
      },
      99
    );
  }
}

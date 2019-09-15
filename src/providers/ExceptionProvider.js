import AbstractProvider from '../api/AbstractProvider';
import KernelEvents from './eventProvider/KernelEvents';
import Response from '../core/response/Response';
import Log from './loggerProvider/Log';

let pathLib = require('path');
let twigLib = require('twig');

export default class ExceptionProvider extends AbstractProvider {
  async registration(app) {
    twigLib.cache(false);
  }

  async subscribe(app, EventDispatcher) {
    EventDispatcher.addEventListener(
      KernelEvents.EXCEPTION,
      async (event) => {
        if (app.getParam(this.getName()).renderingPage) {
          let html = await new Promise((resolve) => {
            twigLib.renderFile(
              app.getParam(this.getName()).view || pathLib.join(__dirname, '/exceptionProvider/view/exception.twig'),
              {
                exception: event.ex,
                app: app,
                event: event,
              },
              (err, html) => {
                resolve(html);
              }
            );
          });
          event.response = new Response(html, Response.HTTP_INTERNAL_SERVER_ERROR);
        } else {
          event.response = new Response('', Response.HTTP_INTERNAL_SERVER_ERROR);
        }

        if (app.getParam(this.getName()).consoleLog) {
          Log.console(event.ex.stack, Log.ERROR);
        }
      },
      -10
    );
  }
}

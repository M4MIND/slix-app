'use strict';

exports.default = void 0;

var _AbstractProvider = require('../api/AbstractProvider');

var _KernelEvents = require('./eventProvider/KernelEvents');

var _Response = require('../core/response/Response');

var _Log = require('./loggerProvider/Log');

let pathLib = require('path');

let twigLib = require('twig');

class ExceptionProvider extends _AbstractProvider.default {
  async registration(app) {
    twigLib.cache(false);
  }

  async subscribe(app, EventDispatcher) {
    EventDispatcher.addEventListener(
      _KernelEvents.default.EXCEPTION,
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
          event.response = new _Response.default(html, _Response.default.HTTP_INTERNAL_SERVER_ERROR);
        } else {
          event.response = new _Response.default('', _Response.default.HTTP_INTERNAL_SERVER_ERROR);
        }

        if (app.getParam(this.getName()).consoleLog) {
          _Log.default.console(event.ex.stack, _Log.default.ERROR);
        }
      },
      -10
    );
  }
}

exports.default = ExceptionProvider;

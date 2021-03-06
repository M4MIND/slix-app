'use strict';

exports.default = void 0;

var _AbstractProvider = require('../api/AbstractProvider');

var _KernelEvents = require('./eventProvider/KernelEvents');

var _Response = require('../core/response/Response');

class ExceptionProvider extends _AbstractProvider.default {
  async subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(
      _KernelEvents.default.EXCEPTION,
      async (event) => {
        console.dir(event.ex);

        if (App.get('_DEBUG')) {
          event.response = new _Response.default(
            `<h1>${event.ex.name}</h1><pre style="border: 1px solid #EEE; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`,
            500
          );
        } else {
          event.response = new _Response.default('<h1>Error</h1>', _Response.default.HTTP_INTERNAL_SERVER_ERROR);
        }
      },
      -10
    );
  }
}

exports.default = ExceptionProvider;

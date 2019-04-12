"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

class ExceptionServiceProvider extends _AbstractProvider.default {
  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.EXCEPTION(), event => {
      console.log(event.ex);
      event.response.res.writeHead(502);
      event.response.res.end(`<h1>${event.ex.name}</h1><pre style="border: 1px solid #eeeeee; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`);
      return event;
    }, -10);
  }

}

exports.default = ExceptionServiceProvider;
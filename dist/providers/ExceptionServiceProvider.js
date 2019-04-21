"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

var _Log = require("./logger/Log");

var _Response = require("../core/response/Response");

class ExceptionServiceProvider extends _AbstractProvider.default {
  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.EXCEPTION, async event => {
      App.log(event.ex, _Log.default.WARNING());
      event.response = new _Response.default(`<h1>${event.ex.name}</h1><pre style="border: 1px solid #EEE; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`, 500);
    }, -10);
  }

}

exports.default = ExceptionServiceProvider;
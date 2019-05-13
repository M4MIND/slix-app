"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _Log = require("./loggerProvider/Log");

var _KernelEvents = require("./eventProvider/KernelEvents");

const config = {
  console: true,
  writeFile: true,
  pathFile: "/logs/",
  recordEventsLevel: [100, 200, 300, 500]
};

class LoggerProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), config);
  }

  boot(App) {
    App.set('log', (message, level = _Log.default.DEFAULT()) => {
      if (App.getParam(this.getName()).console) {
        _Log.default.console(message, level);
      }
    });
  }

  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.REQUEST, Event => {
      App.log(`${Event.request.method}: ${Event.request.url}`, _Log.default.INFO());
    });
    EventDispatcher.addEventListener(_KernelEvents.default.CALL_CONTROLLER, Event => {
      App.log(`Handler [${Event.controller.controller.constructor.name}] => ${Event.controller.pattern}`, _Log.default.INFO());
    });
    EventDispatcher.addEventListener(_KernelEvents.default.EXCEPTION, Event => {
      App.log(`${Event.ex.message}`, _Log.default.ERROR());
    });
  }

}

exports.default = LoggerProvider;
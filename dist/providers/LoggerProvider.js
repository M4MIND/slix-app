"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _Log = require("./loggerProvider/Log");

var _KernelEvents = require("./eventProvider/KernelEvents");

class LoggerProvider extends _AbstractProvider.default {
  async registration(App) {}

  async boot(App) {
    App.set('log', (message, level = _Log.default.DEFAULT) => {
      if (App.getParam(this.getName()).console) {
        _Log.default.console(message, level);
      }
    });
  }

  async subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.REQUEST, Event => {
      Event.request.time = Date.now();
      Event.request.log = `[${Event.request.method} : '${Event.request.url}']`;
    }, -99);
    EventDispatcher.addEventListener(_KernelEvents.default.CALL_CONTROLLER, Event => {
      if (Event.controller.controller !== null) {
        Event.request.log += ` [Controller: ${Event.controller.controller.constructor.name} '${Event.controller.pattern}']`;
      }
    }, 99);
    EventDispatcher.addEventListener(_KernelEvents.default.EXCEPTION, Event => {
      App.log(`${Event.ex.message}`, _Log.default.ERROR);
    }, -99);
    EventDispatcher.addEventListener(_KernelEvents.default.TERMINATE, Event => {
      if (Event.request.log) {
        Event.request.log += ` [time: '${Date.now() - Event.request.time}ms']`;
        App.log(Event.request.log, _Log.default.INFO);
      }
    }, 99);
  }

}

exports.default = LoggerProvider;
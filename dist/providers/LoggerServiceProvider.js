"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _Log = require("./logger/Log");

var _LogFile = require("./logger/LogFile");

class LoggerServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      console: App.get('debug') ? App.get('debug') : true,
      writeFile: App.get('log') ? App.get('log') : true,
      pathFile: '/logs/',
      recordEventsLevel: [_Log.default.DEFAULT(), _Log.default.INFO(), _Log.default.WARNING(), _Log.default.ERROR()]
    });
    App.set('log', (message, level = _Log.default.DEFAULT()) => {
      if (App.getParam(this.getName()).console) {
        _Log.default.console(message, level);
      }

      if (App.getParam(this.getName()).writeFile) {
        _LogFile.default.record();
      }
    });
  }

}

exports.default = LoggerServiceProvider;
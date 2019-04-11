"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

class ControllerServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: '/controllers/'
    });
  }

}

exports.default = ControllerServiceProvider;
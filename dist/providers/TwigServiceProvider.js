"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

class TwigServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: '/views/'
    });
  }

}

exports.default = TwigServiceProvider;
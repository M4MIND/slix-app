"use strict";

exports.default = void 0;

var _Container = require("./container/Container");

var _LoggerServiceProvider = require("./providers/LoggerServiceProvider");

class Slix extends _Container.default {
  constructor() {
    super();
    this.registrationProvider(new _LoggerServiceProvider.default(), {});
  }

}

exports.default = Slix;
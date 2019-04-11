"use strict";

exports.default = void 0;

var _Container = require("./container/Container");

var _LoggerServiceProvider = require("./providers/LoggerServiceProvider");

var _ProtocolServiceProvider = require("./providers/ProtocolServiceProvider");

var _EventDispatcherServiceProvider = require("./providers/EventDispatcherServiceProvider");

var _TwigServiceProvider = require("./providers/TwigServiceProvider");

var _HTTP = require("./providers/protocol/HTTP");

var _ControllerServiceProvider = require("./providers/ControllerServiceProvider");

var _FileTransferServiceProvider = require("./providers/FileTransferServiceProvider");

let boot = false;

class Slix extends _Container.default {
  /** @param {string} __dir*/
  constructor(__dir) {
    super();
    this.set('DIR', __dir);
    this.registrationProvider(new _EventDispatcherServiceProvider.default());
    this.registrationProvider(new _LoggerServiceProvider.default());
    this.registrationProvider(new _FileTransferServiceProvider.default());
    this.registrationProvider(new _ProtocolServiceProvider.default());
    this.registrationProvider(new _TwigServiceProvider.default());
    this.registrationProvider(new _ControllerServiceProvider.default());
  }

  run() {
    if (!boot) {
      boot = true;
      this.boot();
    }
  }

  boot() {
    if (boot) {
      for (let provider of this.getAllProviders()) {
        provider.boot(this);
      }
    }
  }

}

exports.default = Slix;
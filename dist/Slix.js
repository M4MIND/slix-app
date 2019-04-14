"use strict";

exports.default = void 0;

var _Container = require("./container/Container");

var _LoggerServiceProvider = require("./providers/LoggerServiceProvider");

var _ProtocolServiceProvider = require("./providers/ProtocolServiceProvider");

var _EventDispatcherServiceProvider = require("./providers/EventDispatcherServiceProvider");

var _TwigServiceProvider = require("./providers/TwigServiceProvider");

var _ControllerServiceProvider = require("./providers/ControllerServiceProvider");

var _FileTransferServiceProvider = require("./providers/FileTransferServiceProvider");

var _ExceptionServiceProvider = require("./providers/ExceptionServiceProvider");

let pathLib = require('path');

let boot = false;

class Slix extends _Container.default {
  constructor(__dir = pathLib.dirname(require.main.filename)) {
    super();
    this.set('DIR', __dir);
    this.registrationProvider(new _EventDispatcherServiceProvider.default());
    this.registrationProvider(new _ExceptionServiceProvider.default());
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

      for (let provider of this.getAllProviders()) {
        provider.subscribe(this, this.get('eventDispatcher'));
      }
    }
  }

}

exports.default = Slix;
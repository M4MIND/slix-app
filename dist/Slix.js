"use strict";

exports.default = void 0;

var _Container = require("./container/Container");

var _LoggerProvider = require("./providers/LoggerProvider");

var _ProtocolProvider = require("./providers/ProtocolProvider");

var _EventDispatcherProvider = require("./providers/EventDispatcherProvider");

var _TwigProvider = require("./providers/TwigProvider");

var _ControllerProvider = require("./providers/ControllerProvider");

var _FileTransferProvider = require("./providers/FileTransferProvider");

var _ExceptionProvider = require("./providers/ExceptionProvider");

var _RouterProvider = require("./providers/RouterProvider");

var _ValidateURIProvider = require("./providers/ValidateURIProvider");

let pathLib = require('path');

class Slix extends _Container.default {
  /**
   * @param {string} __dir
   * */
  constructor(__dir = pathLib.dirname(require.main.filename)) {
    super();

    if (!this.constructor.boot) {
      this.constructor.this = this;
      this.set('ROOT_DIR', __dir);
      this.registrationProvider(new _EventDispatcherProvider.default());
      this.registrationProvider(new _ExceptionProvider.default());
      this.registrationProvider(new _LoggerProvider.default());
      this.registrationProvider(new _ProtocolProvider.default());
      this.registrationProvider(new _ValidateURIProvider.default());
      this.registrationProvider(new _FileTransferProvider.default());
      this.registrationProvider(new _TwigProvider.default());
      this.registrationProvider(new _RouterProvider.default());
      this.registrationProvider(new _ControllerProvider.default());
    }
  }

  run() {
    if (!this.constructor.boot) {
      this.constructor.boot = true;

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
Slix.this = null;
Slix.boot = false;
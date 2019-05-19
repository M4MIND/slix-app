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
      this.registrationProvider(_EventDispatcherProvider.default);
      this.registrationProvider(_ExceptionProvider.default);
      this.registrationProvider(_LoggerProvider.default);
      this.registrationProvider(_ProtocolProvider.default);
      this.registrationProvider(_ValidateURIProvider.default);
      this.registrationProvider(_FileTransferProvider.default);
      this.registrationProvider(_TwigProvider.default);
      this.registrationProvider(_RouterProvider.default);
      this.registrationProvider(_ControllerProvider.default);
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
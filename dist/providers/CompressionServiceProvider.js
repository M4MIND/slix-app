"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

let zlibLib = require('zlib');

class CompressionServiceProvider extends _AbstractProvider.default {
  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.RESPONSE, event => {
      return event;
    }, -20, this);
  }

}

exports.default = CompressionServiceProvider;
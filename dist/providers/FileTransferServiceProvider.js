"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

class FileTransferServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: '/static/',
      filesWithoutAccess: [],
      defaultContentType: {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg'
      },
      customContentType: {}
    });
  }

  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.REQUEST(), event => {});
  }

}

exports.default = FileTransferServiceProvider;
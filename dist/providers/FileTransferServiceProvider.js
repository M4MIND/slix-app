"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

class FileTransferServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: '/static/',
      contentTypeList: {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg'
      }
    });
  }

}

exports.default = FileTransferServiceProvider;
"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _Response = require("../core/response/Response");

let twigLib = require('twig');

let pathLib = require('path');

class TwigServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: './views/'
    });
  }

  boot(App) {
    this.config = App.getParam(this.getName());

    App.render = async (path, values = {}) => {
      return await new Promise((resolve, reject) => {
        path = pathLib.join(App.get('DIR'), pathLib.join(this.config.path, path)) + '.twig';
        twigLib.renderFile(path, values, (err, html) => {
          if (err) {
            reject(err);
          }

          resolve(new _Response.default(html, 200));
        });
      });
    };
  }

}

exports.default = TwigServiceProvider;
"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _Response = require("../core/response/Response");

const config = {
  path: "/views/",
  cache: false,
  typeFile: ".twig"
};

let twigLib = require('twig');

let pathLib = require('path');

class TwigServiceProvider extends _AbstractProvider.default {
  registration(App) {
    config.path = pathLib.join(App.get('ROOT_DIR'), config.path);
    App.setParam(this.getName(), config);
  }

  boot(App) {
    this.config = App.getParam(this.getName());
    twigLib.cache(this.config.cache);

    App.render = async (path, values = {}) => {
      return await new Promise((resolve, reject) => {
        path = pathLib.join(this.config.path, path) + this.config.typeFile;
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
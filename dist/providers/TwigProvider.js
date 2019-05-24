'use strict';

exports.default = void 0;

var _AbstractProvider = require('../api/AbstractProvider');

var _Response = require('../core/response/Response');

var _KernelEvents = require('./eventProvider/KernelEvents');

var _EventRenderingPreparation = require('./eventProvider/EventRenderingPreparation');

const config = {
  path: '/views/',
  cache: false,
  typeFile: '.twig',
};

let twigLib = require('twig');

let pathLib = require('path');

class TwigProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), config);
  }

  boot(App) {
    this.config = App.getParam(this.getName());
    this.config.path = pathLib.join(App.get('ROOT_DIR'), this.config.path);
    twigLib.cache(this.config.cache);

    App.render = async (path, values = {}) => {
      let $event = new _EventRenderingPreparation.default(null, values);
      App.dispatch(_KernelEvents.default.RENDERING_PREPARATION, $event);
      values = $event.data;
      return await new Promise((resolve, reject) => {
        if (this.config.path) {
          path = pathLib.join(this.config.path, path);
        }

        if (this.config.typeFile) {
          path += this.config.typeFile;
        }

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

exports.default = TwigProvider;

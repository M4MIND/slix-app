import AbstractProvider from '../api/AbstractProvider';
import Response from '../core/response/Response';

import config from './twigProvider/config.json';
import KernelEvents from './eventProvider/KernelEvents';
import EventRenderingPreparation from './eventProvider/EventRenderingPreparation';

let twigLib = require('twig');
let pathLib = require('path');

export default class TwigProvider extends AbstractProvider {
  registration(App) {
    App.setParam(this.getName(), config);
  }

  boot(App) {
    this.config = App.getParam(this.getName());
    this.config.path = pathLib.join(App.get('ROOT_DIR'), this.config.path);

    twigLib.cache(this.config.cache);

    App.render = async (path, values = {}) => {
      let $event = new EventRenderingPreparation(null, values);

      App.dispatch(KernelEvents.RENDERING_PREPARATION, $event);

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
          resolve(new Response(html, 200));
        });
      });
    };
  }
}

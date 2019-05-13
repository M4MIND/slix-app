import AbstractProvider from '../api/AbstractProvider';
import Response from '../core/response/Response';

import config from './twigProvider/config.json';

let twigLib = require('twig');
let pathLib = require('path');

export default class TwigProvider extends AbstractProvider {
    registration(App) {
        config.path = pathLib.join(App.get('ROOT_DIR'), config.path);
        App.setParam(this.getName(), config);
    }

    boot(App) {
        this.config = App.getParam(this.getName());
        twigLib.cache(this.config.cache);

        App.render = async (path, values = {}) => {
            return await new Promise((resolve, reject) => {
                path =
                    pathLib.join(this.config.path, path) + this.config.typeFile;

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

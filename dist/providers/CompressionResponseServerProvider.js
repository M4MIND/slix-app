"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

let zlib = require('zlib');

class CompressionResponseServerProvider extends _AbstractProvider.default {
  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.RESPONSE, async event => {
      if (event.request.header.has('accept-encoding')) {
        let typeCompression = event.request.header.get('accept-encoding');

        if (typeCompression.indexOf('gzip') > -1) {
          let buffer = await new Promise((resolve, reject) => {
            zlib.gzip(event.response.content, (err, buffer) => {
              if (err) {
                reject(err);
              }

              resolve(buffer);
            });
          });
          event.response.headers.set('Content-Encoding', 'gzip');
          event.response.content = buffer;
        }
      }
    }, 999, this);
  }

}

exports.default = CompressionResponseServerProvider;
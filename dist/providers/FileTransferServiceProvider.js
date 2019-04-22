"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

var _FileResponse = require("../core/response/FileResponse");

let fsLib = require('fs');

let pathLib = require('path');

class FileTransferServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: pathLib.join(App.get('ROOT_DIR'), '/static/'),
      filesWithoutAccess: [],
      defaultContentType: {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.ico': 'image/x-icon'
      },
      customContentType: {}
    });
  }

  subscribe(App, EventDispatcher) {
    this.config = App.getParam(this.getName());
    EventDispatcher.addEventListener(_KernelEvents.default.REQUEST, async event => {
      let path = pathLib.join(this.config.path, event.request.url);
      let isFile = await (async () => {
        return new Promise((resolve, reject) => {
          fsLib.lstat(path, (err, stat) => {
            if (err) {
              reject(err);
            }

            if (stat !== undefined) {
              if (stat.isFile()) {
                resolve({
                  status: true,
                  stat: stat
                });
                return;
              }
            }

            resolve({
              status: false
            });
          });
        }).catch(err => false);
      })();

      if (isFile.status) {
        return await (async () => {
          return new Promise((resolve, reject) => {
            let typeFile = pathLib.extname(path);
            let contentType = 'text/html';

            if (this.config.defaultContentType.hasOwnProperty(typeFile)) {
              contentType = this.config.defaultContentType[typeFile];
            } else if (this.config.customContentType.hasOwnProperty(typeFile)) {
              contentType = this.config.customContentType[typeFile];
            }

            fsLib.readFile(path, (err, content) => {
              event.response = new _FileResponse.default(content, contentType);
              resolve(true);
            });
          });
        })();
      }
    }, -20, this);
  }

}

exports.default = FileTransferServiceProvider;
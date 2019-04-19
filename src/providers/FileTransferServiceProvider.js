import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"
import FileResponse from "../core/response/FileResponse";

let fsLib = require('fs');
let pathLib = require('path');

export default class FileTransferServiceProvider extends AbstractProvider {
    registration(App) {
        App.setParam(this.getName(), {
            path: pathLib.join(App.get('ROOT_DIR'), '/static/'),
            filesWithoutAccess: [],
            defaultContentType: {
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpg'
            },
            customContentType: {},
        })
    }

    subscribe(App, EventDispatcher) {
        this.config = App.getParam(this.getName());

        EventDispatcher.addEventListener(KernelEvents.REQUEST, async (event) => {
            let path = pathLib.join(this.config.path, event.request.url);

            let isFile = await (async () => {
                return new Promise((resolve, reject) => {
                    fsLib.lstat(path, (err, stat) => {
                        if (err) {
                            reject(err);
                        }

                        if (stat !== undefined) {
                            if (stat.isFile()) {
                                resolve({status: true, stat: stat});
                                return;
                            }
                        }
                        resolve({status: false});
                    })
                }).catch(err => false)
            })();

            if (isFile.status) {
                await (async () => {
                    return new Promise((resolve, reject) => {
                        let typeFile = pathLib.extname(path);
                        let contentType = 'text/html';

                        if (this.config.defaultContentType.hasOwnProperty(typeFile)) {
                            contentType = this.config.defaultContentType[typeFile];
                        } else if (this.config.customContentType.hasOwnProperty(typeFile)) {
                            contentType = this.config.customContentType[typeFile];
                        }

                        fsLib.readFile(path, (err, content) => {
                            event.setResponse(new FileResponse(content, contentType));
                        })
                    })
                })();
            }

            return event;
        }, -20, this);
    }
}
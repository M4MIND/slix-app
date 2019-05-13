import AbstractProvider from '../api/AbstractProvider';
import KernelEvents from './eventProvider/KernelEvents';
import FileResponse from '../core/response/FileResponse';

let fsLib = require('fs');
let pathLib = require('path');

export default class FileTransferProvider extends AbstractProvider {
    registration(App) {
        App.setParam(this.getName(), {
            path: '/static/',
            foldersWithAccess: {},
            defaultContentType: {
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpg',
                '.ico': 'image/x-icon',
            },
            customContentType: {},
        });

        this.config = App.getParam(this.getName());
    }

    boot(App) {
        let foldersWithAccess = {};

        for (let key of Object.keys(this.config.foldersWithAccess)) {
            foldersWithAccess[key] = pathLib.join(
                App.get('ROOT_DIR'),
                this.config.foldersWithAccess[key]
            );
        }

        App.setParam(this.getName(), {
            path: pathLib.join(App.get('ROOT_DIR'), this.config.path),
            foldersWithAccess: foldersWithAccess,
        });
    }

    subscribe(App, EventDispatcher) {
        EventDispatcher.addEventListener(
            KernelEvents.REQUEST,
            (event) => {
                if (event.response) return;
                return new Promise((resolve, reject) => {
                    let path;

                    for (let key of Object.keys(
                        this.config.foldersWithAccess
                    )) {
                        if (event.request.url.indexOf(key) >= 0) {
                            let file = event.request.url.replace(key, '');

                            path = pathLib.join(
                                this.config.foldersWithAccess[key],
                                file
                            );
                            break;
                        }
                    }

                    if (!path) {
                        path = pathLib.join(
                            this.config.path,
                            event.request.url
                        );
                    }

                    let typeFile = pathLib.extname(path);

                    fsLib.lstat(path, (err, stat) => {
                        if (err) {
                            resolve(false);
                        }

                        if (stat !== undefined) {
                            if (stat.isFile()) {
                                let contentType = 'text/html';

                                if (
                                    this.config.defaultContentType.hasOwnProperty(
                                        typeFile
                                    )
                                ) {
                                    contentType = this.config
                                        .defaultContentType[typeFile];
                                } else if (
                                    this.config.customContentType.hasOwnProperty(
                                        typeFile
                                    )
                                ) {
                                    contentType = this.config.customContentType[
                                        typeFile
                                    ];
                                }

                                fsLib.readFile(path, (err, content) => {
                                    if (err) {
                                        reject(err);
                                    }
                                    event.response = new FileResponse(
                                        content,
                                        contentType
                                    );
                                    resolve(true);
                                });
                            } else {
                                resolve(false);
                            }
                        } else {
                            resolve(false);
                        }
                    });
                });
            },
            -20,
            this
        );
    }
}

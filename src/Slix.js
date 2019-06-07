import Container from './container/Container';
import LoggerProvider from './providers/LoggerProvider';
import ProtocolProvider from './providers/ProtocolProvider';
import EventDispatcherProvider from './providers/EventDispatcherProvider';
import FileTransferProvider from './providers/FileTransferProvider';
import ExceptionProvider from './providers/ExceptionProvider';
import RouterProvider from './providers/RouterProvider';

let pathLib = require('path');

export default class Slix extends Container {
    static this;
    static boot;

    /**
     * @param {string} __dir
     * */
    constructor(__dir = pathLib.dirname(require.main.filename)) {

        super();
        if (!this.constructor.boot) {
            this.constructor.this = this;

            this.set('ROOT_DIR', __dir);
            this.registrationProvider(EventDispatcherProvider);
            this.registrationProvider(ExceptionProvider);
            this.registrationProvider(LoggerProvider);
            this.registrationProvider(ProtocolProvider);
            this.registrationProvider(FileTransferProvider);
            this.registrationProvider(RouterProvider);
        }
    }

    run() {
        (async () => {
            if (!this.constructor.boot) {
                this.constructor.boot = true;

                let collection = [];

                for (let provider of this.getAllProviders()) {
                    collection.push(provider.boot(this));
                }

                await Promise.all(collection);
                
                collection = [];

                for (let provider of this.getAllProviders()) {
                    collection.push(provider.subscribe(this, this.get('eventDispatcher')));
                }
                await Promise.all(collection);
            }
        })();
    }

    /** @param {Array<Array>} value*/
    addProviders(value = []) {
        for (let provider of value) {
            this.registrationProvider(provider[0]);

            if (provider[1]) {
                this.setParam(provider[0], provider[1]);
            }
        }
    }
}
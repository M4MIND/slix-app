import Container from './container/Container';
import LoggerProvider from './providers/LoggerProvider';
import ProtocolProvider from './providers/ProtocolProvider';
import EventDispatcherProvider from './providers/EventDispatcherProvider';
import TwigProvider from './providers/TwigProvider';
import ControllerProvider from './providers/ControllerProvider';
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
            this.registrationProvider(TwigProvider);
            this.registrationProvider(RouterProvider);
            this.registrationProvider(ControllerProvider);
        }
    }

    run() {
        if (!this.constructor.boot) {
            this.constructor.boot = true;
            for (let provider of this.getAllProviders()) {
                provider.boot(this);
            }
            for (let provider of this.getAllProviders()) {
                provider.subscribe(this, this.get('eventDispatcher'));
            }
        }
    }
}
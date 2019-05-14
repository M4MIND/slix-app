import Container from './container/Container';
import LoggerProvider from './providers/LoggerProvider';
import ProtocolProvider from './providers/ProtocolProvider';
import EventDispatcherProvider from './providers/EventDispatcherProvider';
import TwigProvider from './providers/TwigProvider';
import ControllerProvider from './providers/ControllerProvider';
import FileTransferProvider from './providers/FileTransferProvider';
import ExceptionProvider from './providers/ExceptionProvider';
import RouterProvider from './providers/RouterProvider';
import ValidateURIProvider from './providers/ValidateURIProvider';

let pathLib = require('path');

export default class Slix extends Container {
    /**
     * @param {string} __dir
     * */
    constructor(__dir = pathLib.dirname(require.main.filename)) {
        super();
        if (!this.constructor.boot) {
            this.constructor.this = this;

            this.set('ROOT_DIR', __dir);
            this.registrationProvider(new EventDispatcherProvider());
            this.registrationProvider(new ExceptionProvider());
            this.registrationProvider(new LoggerProvider());
            this.registrationProvider(new ProtocolProvider());
            this.registrationProvider(new ValidateURIProvider());
            this.registrationProvider(new FileTransferProvider());
            this.registrationProvider(new TwigProvider());
            this.registrationProvider(new RouterProvider());
            this.registrationProvider(new ControllerProvider());
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

Slix.this = null;
Slix.boot = false;
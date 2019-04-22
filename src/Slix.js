import Container from "./container/Container"
import LoggerServiceProvider from "./providers/LoggerServiceProvider";
import ProtocolServiceProvider from "./providers/ProtocolServiceProvider"
import EventDispatcherServiceProvider from "./providers/EventDispatcherServiceProvider"
import TwigServiceProvider from "./providers/TwigServiceProvider"
import ControllerServiceProvider from "./providers/ControllerServiceProvider"
import FileTransferServiceProvider from "./providers/FileTransferServiceProvider"
import ExceptionServiceProvider from "./providers/ExceptionServiceProvider"
import RouterServiceProvider from "./providers/RouterServiceProvider"
import CompressionResponseServiceProvider from "./providers/CompressionResponseServiceProvider"

let pathLib = require('path');

let boot = false;

export default class Slix extends Container {
    /**
     * @param {string} __dir
     * */
    constructor(__dir = pathLib.dirname(require.main.filename)) {
        super();

        this.set('ROOT_DIR', __dir);
        this.registrationProvider(new EventDispatcherServiceProvider());
        this.registrationProvider(new ExceptionServiceProvider());
        this.registrationProvider(new LoggerServiceProvider());
        this.registrationProvider(new ProtocolServiceProvider());
        this.registrationProvider(new CompressionResponseServiceProvider());
        this.registrationProvider(new FileTransferServiceProvider());
        this.registrationProvider(new TwigServiceProvider());
        this.registrationProvider(new RouterServiceProvider());
        this.registrationProvider(new ControllerServiceProvider());
    }

    run() {
        if (!boot) {
            boot = true;
            this.boot();
        }
    }

    boot() {
        if (boot) {
            for (let provider of this.getAllProviders()) {
                provider.boot(this);
            }
            for (let provider of this.getAllProviders()) {
                provider.subscribe(this, this.get('eventDispatcher'));
            }
        }
    }
}
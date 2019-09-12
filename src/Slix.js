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

  /**
   * @param {function?} registration
   * @param {function?} boot
   * @param {function?} subscribe
   * @param {function?} success
   * */
  run(registration = () => {}, boot = () => {}, subscribe = () => {}, success = () => {}) {
    (async () => {
      if (!this.constructor.boot) {
        this.constructor.boot = true;

        await Promise.all(this.getAllProviders().map((item) => item.registration(this))).then(
          () => !registration || registration(this)
        );
        await Promise.all(this.getAllProviders().map((item) => item.boot(this))).then(() => !boot || boot(this));
        await Promise.all(this.getAllProviders().map((item) => item.subscribe(this, this.eventDispatcher))).then(
          () => !subscribe || subscribe(this)
        );
        await Promise.all(this.getAllProviders().map((item) => item.success(this))).then(
          () => !success || success(this)
        );
      }
    })();
  }

  addProviders(value) {
    for (let item of value) {
      this.registrationProvider(item.provider);

      if (item.params) {
        this.setParam(item.provider, item.params);
      }
    }
  }
}

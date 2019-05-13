import AbstractProvider from '../api/AbstractProvider';
import Log from './loggerServiceProvider/Log';
import LogFile from './loggerServiceProvider/LogFile';

import config from './loggerServiceProvider/config.json';

export default class LoggerServiceProvider extends AbstractProvider {
    registration(App) {
        App.setParam(this.getName(), config);
    }

    boot(App) {
        App.set('log', (message, level = Log.DEFAULT()) => {
            if (App.getParam(this.getName()).console) {
                Log.console(message, level);
            }

            if (App.getParam(this.getName()).writeFile) {
                LogFile.record();
            }
        });
    }
}

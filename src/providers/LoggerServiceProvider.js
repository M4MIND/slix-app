import AbstractProvider from "../api/AbstractProvider";
import Log from "./logger/Log"
import LogFile from "./logger/LogFile"

export default class LoggerServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			console: App.get('debug') ? App.get('debug') : true,
			writeFile: App.get('log') ? App.get('log') : true,
			pathFile: '/logs/',
			recordEventsLevel: [Log.DEFAULT(), Log.INFO(), Log.WARNING(), Log.ERROR()]
		});

		App.set('log', (message, level = Log.DEFAULT()) => {
			if (App.getParam(this.getName()).console) {
				Log.console(message, level)
			}

			if (App.getParam(this.getName()).writeFile) {
				LogFile.record();
			}
		})
	}
}
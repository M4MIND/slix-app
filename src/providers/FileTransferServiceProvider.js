import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"

export default class FileTransferServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: '/static/',
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
		EventDispatcher.addEventListener(KernelEvents.REQUEST(), async (event) => {
			return event;
		}, -10, this);
	}
}
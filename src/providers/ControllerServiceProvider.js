import AbstractProvider from "../api/AbstractProvider"

export default class ControllerServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: '/controllers/'
		});
	}
}
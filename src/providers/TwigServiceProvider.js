import AbstractProvider from "../api/AbstractProvider"

export default class TwigServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: '/views/'
		})
	}
}
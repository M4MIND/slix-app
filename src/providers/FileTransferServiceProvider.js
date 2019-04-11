import AbstractProvider from "../api/AbstractProvider"

export default class FileTransferServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: '/static/',
			contentTypeList: {
				'.css': 'text/css',
				'.js': 'text/javascript',
				'.json': 'application/json',
				'.png': 'image/png',
				'.jpg': 'image/jpg'
			},
		})
	}
}
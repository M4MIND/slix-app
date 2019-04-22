import {AbstractController, Response} from "../../index"

export default class PageNotFound extends AbstractController {
	mount() {
		this.ALL('*', this.index);
	}

	index = async (request) => {
		return this.App.render('index');
	}
}
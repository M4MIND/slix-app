import {AbstractController, Cookie} from "../../index"

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index);
	}

	index = async (request) => {
		return await this.App.render('index', {
			title: request.url
		});
	}
}
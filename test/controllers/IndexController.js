import {AbstractController, Cookie} from "../../index"

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index);
	}

	index = async (request) => {
		let response = await this.App.render('index', {
			title: 'Index page'
		});

		response.headers.setCookie(new Cookie('index', 'index'));

		return response;
	}
}
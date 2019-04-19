import {AbstractController, Cookie} from "../../index"

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index);
	}

	index = async (request) => {
		let response = await this.App.render('index', {
			title: request.url
		});

		response.headers.removeCookie('newCookie');
		return response;
	}
}
import {AbstractController, Cookie} from "../../index"

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index);
		this.POST('/', this.post);
	}

	index = async (request) => {
		let response = await this.App.render('index', {
			title: 'Index page'
		});

		response.headers.setCookie(new Cookie('index', 'index'));

		return response;
	};

	post = async (request) => {
		console.dir(request.post);
	};
}
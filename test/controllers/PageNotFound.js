import {AbstractController, Response} from "../../index"

export default class PageNotFound extends AbstractController {
	mount() {
		this.ALL('*', this.index);
	}

	index = async (request) => {
		let response = await this.App.render('error/404/index', {
			title: "Page not found"
		});

		response.statusCode = Response.HTTP_NOT_FOUND;

		return response;
	}
}
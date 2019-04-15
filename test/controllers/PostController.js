import AbstractController from "../../src/api/AbstractController"

export default class PostController extends AbstractController {
	mount() {
		this.GET('/post/', this.index);
	}

	index = async () => {

	}
}
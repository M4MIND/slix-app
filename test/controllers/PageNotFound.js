import AbstractController from "../../src/api/AbstractController"

export default class PageNotFound extends AbstractController {
	mount() {
		this.ALL('*', this.index);
	}

	index = () => {

	}
}
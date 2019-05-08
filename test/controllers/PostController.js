import {AbstractController, JsonResponse, RedirectResponse} from "../../index"

export default class PostController extends AbstractController {
	mount() {
		this.POST('/post/', this.index);
		this.GET('/post/redirect/', this.redirect);
	}

	index = async () => {
		return new JsonResponse({"test": "debug"});
	};

	redirect = async () => {
		return new RedirectResponse('/');
	}
}
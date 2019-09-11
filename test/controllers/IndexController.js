import {AbstractController, Slix, RedirectResponse, Response} from "../../index"

export default class IndexController extends AbstractController {
    mount() {
        this.GET('/', this.index);
        this.POST('/', this.post);
    }

    index = async (request) => {
        return new Response()
    };

    post = async (request) => {
        return new RedirectResponse('/');
    };
}
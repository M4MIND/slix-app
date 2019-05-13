import {AbstractController, Response, JsonResponse} from "../../index"

export default class DynamicPathController extends AbstractController {
    mount() {
        this.GET('/dynamic/', this.index);
        this.GET('/dynamic/:category:/', this.category);
        this.GET('/dynamic/:category:/:post:/', this.post);
    }

    index = async (request) => {
        return new Response('Dynamic root');
    };

    category = async (request) => {
        return new Response('Dynamic category: ' + request.path.get('category'))
    };

    post = async (request) => {
        return new JsonResponse({
            query: request.query.all(),
            path: request.path.all()
        });
    };
}
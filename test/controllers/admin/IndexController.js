import AdminController from "./AdminController";
import Response from "../../../src/core/response/Response";

export default class IndexController extends AdminController {
    mount() {
        this.GET('/admin/', this.index);
    }

    index = async () => {
        return new Response("Admin panel");
    }
}
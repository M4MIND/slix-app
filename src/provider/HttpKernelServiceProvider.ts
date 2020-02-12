import {AbstractServiceProvider} from "../core/services/AbstractServiceProvider";
import {Slix} from "../Slix";
import {HttpKernel} from "./httpKernel/HttpKernel";

export class HttpKernelServiceProvider extends AbstractServiceProvider {
    registration(app: Slix): void {
        app.set('KERNEL', new HttpKernel());
    }
}
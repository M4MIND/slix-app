import {Container} from "./core/container/Container";
import {HttpKernelServiceProvider} from "./provider/HttpKernelServiceProvider";
import {ServiceProviderInterface} from "./core/services/ServiceProviderInterface";
import {RoutingServiceProvider} from "./provider/RoutingServiceProvider";
import {ExceptionHandlerServiceProvider} from "./provider/ExceptionHandlerServiceProvider";
import {Http} from "./core/server/Http";
import {Protocol} from "./core/server/Protocol";
import {EventDispatcher} from "./core/event/EventDispatcher";

export class Slix extends Container {
    constructor(params?: object) {
        super();

        this.set('request.http.port', 3000);
        this.set('request.https.port', 443);
        this.set('request.hostname', '127.0.0.1');
        this.set('debug', true);
        this.set('charset', 'utf8');
        this.set('providers', new Map());
        this.set('eventDispatcher', new EventDispatcher(this));

        this.register(new HttpKernelServiceProvider());
        this.register(new RoutingServiceProvider());
        this.register(new ExceptionHandlerServiceProvider());

        for (let key in params) {
            this.replace(key, params[key]);
        }
    }

    public register(service: ServiceProviderInterface, params?: object): Slix {
        this.get('providers').set(service.getKey(), service);

        service.registration(this);

        return this;
    }

    public run(protocol?: Protocol) {
        if (!protocol) {
            protocol = new Http();
        }

        for (var item of this.get('providers').values()) {
            item.subscribe(this);

            item.boot(this);
        }

        protocol.boot(this, (request, response) => {
            this.get('KERNEL').handle(request);
            response.write('Hello world');
            response.end();
        });
    }
}
import AbstractProvider from '../api/AbstractProvider';
import KernelEvents from './eventProvider/KernelEvents';
import Response from '../core/response/Response';

export default class ExceptionProvider extends AbstractProvider {
  async subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(
      KernelEvents.EXCEPTION,
      async (event) => {
        console.dir(event.ex);
        if (App.get('_DEBUG')) {
          event.response = new Response(
            `<h1>${event.ex.name}</h1><pre style="border: 1px solid #EEE; display: block; padding: 20px; border-radius: 4px;">${event.ex.message}</pre>`,
            500
          );
        } else {
          event.response = new Response('<h1>Error</h1>', Response.HTTP_INTERNAL_SERVER_ERROR);
        }
      },
      -10
    );
  }
}

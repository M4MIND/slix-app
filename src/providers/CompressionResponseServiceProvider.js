import AbstractProvider from "../api/AbstractProvider";
import KernelEvents from "./event/KernelEvents";

let zlib = require('zlib');

export default class CompressionResponseServiceProvider extends AbstractProvider {
	subscribe(App, EventDispatcher) {
		EventDispatcher.addEventListener(KernelEvents.RESPONSE, async (event) => {
			/*if (event.request.header.has('accept-encoding')) {
				let typeCompression = event.request.header.get('accept-encoding');

				if (typeCompression.indexOf('br') > 1) {
					let buffer = await new Promise((resolve, reject) => {
						zlib.brotliCompress(event.response.content, (err, buffer) => {
							if (err) {
								reject(err);
							}
							resolve(buffer)
						})
					});

					event.response.headers.set('Content-Encoding', 'br');
					event.response.content = buffer;
				}
				else if (typeCompression.indexOf('gzip') > -1) {
					let buffer = await new Promise((resolve, reject) => {
						zlib.gzip(event.response.content, (err, buffer) => {
							if (err) {
								reject(err);
							}
							resolve(buffer)
						})
					})

					event.response.headers.set('Content-Encoding', 'gzip');
					event.response.content = buffer;
				}
			}*/
		}, 999, this);
	}
}
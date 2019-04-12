import AbstractEvent from "../../api/AbstractEvent"
import AbstractProvider from "../../api/AbstractProvider"

export default class EventDispatcher {
	constructor() {
		/*** @type {Map<String, Array<{priority: number, callback: function}>>} **/
		this.collection = new Map();
	}

	/**
	 * @param {string} typeEvent
	 * @param {AbstractEvent} event
	 * */
	dispatch = async (typeEvent, event) => {
		if (!this.collection.has(typeEvent)) {
			return;
		}

		return await (async () => {
			for (let listener of this.collection.get(typeEvent)) {
				/** @type {AbstractEvent}*/
				event = await listener.callback(event);

				if (!event) {
					throw new Error(`The provider did not return the event object. Event: ${typeEvent}\r\n${JSON.stringify(listener, null, '\t')}`);
				}

				if (event.break) {
					return event;
				}
			}
			return event;
		})();
	}

	/**
	 * @param {string} typeEvent
	 * @param {function} callback
	 * @param {number} priority
	 * @param {AbstractProvider} provider
	 */
	addEventListener = (typeEvent, callback, priority = 0, provider = null) => {
		if (!this.collection.has(typeEvent)) {
			this.collection.set(typeEvent, []);
		}

		let listener = {
			priority: priority,
			callback: callback,
			provider: provider
		}

		this.collection.get(typeEvent).push(listener);
		this.collection.set(typeEvent, this.collection.get(typeEvent).sort((a, b) => {
			return a.priority - b.priority;
		}))
	}
}
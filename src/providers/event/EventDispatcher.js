export default class EventDispatcher {
	constructor() {
		/*** @type {Map<String, Array<Function>>} **/
		this.collection = new Map();
	}

	/**
	 * @param {string} typeEvent
	 * @param {Object} event
	 * */
	dispatch(typeEvent, event) {

	}

	/**
	 * @param {string} typeEvent
	 * @param {function} callback
	 */
	addEventListener(typeEvent, callback) {
		if (!this.collection.has(typeEvent)) {
			this.collection.set(typeEvent, []);
		}

		this.collection.get(typeEvent).push(callback);
	}
}
import Slix from "../Slix";
import EventDispatcher from '../providers/event/EventDispatcher';

export default class AbstractProvider {

	/** @param {Slix} App */
	registration(App) {}

	/** @param {Slix} App */
	boot(App) {}

	/**
	 * @param {Slix} App
	 * @param {EventDispatcher} EventDispatcher
	 * */
	subscribe(App, EventDispatcher) {}

	/** @return {string} */
	getName() {
		return this.constructor.name;
	}

	/** @return {string} */
	static getName() {
		return this.constructor.name;
	}
}
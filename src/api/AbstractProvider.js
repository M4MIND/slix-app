import Slix from "../Slix";
import EventDispatcher from "../events/EventDispatcher";

export default class AbstractProvider {

    /** @param {Slix} App */
    registration(App) {
        console.dir(`Registration provider: ${this.getName()}`)
    }

    /** @param {Slix} App */
    boot(App) {
        console.dir(`Boot provider: ${this.getName()}`)
    }

    /**
     * @param {Slix} App
     * @param {EventDispatcher} EventDispatcher
     * */
    subscribe(App, EventDispatcher) {
        console.dir(`Subscribe provider: ${this.getName()}`)
    }

    getName() {
        return `Provider: ${this.constructor.name}`;
    }
}
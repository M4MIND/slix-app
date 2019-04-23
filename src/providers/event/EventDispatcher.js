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
            return event;
        }

        return await (async () => {
            let collection = this.collection.get(typeEvent).map(item => item.callback(event));

            await Promise.all(collection).then(result => {}).catch(err => {
                throw err;
            });

            /*for (let listener of this.collection.get(typeEvent)) {
                /!** @type {AbstractEvent}*!/

                await listener.callback(event);

                if (event.break) {
                    break;
                }
            }*/
        })();
    };

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
        };

        this.collection.get(typeEvent).push(listener);
        this.collection.set(typeEvent, this.collection.get(typeEvent).sort((a, b) => {
            return a.priority - b.priority;
        }))
    }
}
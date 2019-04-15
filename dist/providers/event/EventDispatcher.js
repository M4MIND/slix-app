"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

var _AbstractProvider = require("../../api/AbstractProvider");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventDispatcher {
  constructor() {
    _defineProperty(this, "dispatch", async (typeEvent, event) => {
      if (!this.collection.has(typeEvent)) {
        return event;
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
    });

    _defineProperty(this, "addEventListener", (typeEvent, callback, priority = 0, provider = null) => {
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
      }));
    });

    /*** @type {Map<String, Array<{priority: number, callback: function}>>} **/
    this.collection = new Map();
  }
  /**
   * @param {string} typeEvent
   * @param {AbstractEvent} event
   * */


}

exports.default = EventDispatcher;
"use strict";

exports.default = void 0;

class KernelEvents {
  static REQUEST() {
    return "KernelEvents::REQUEST";
  }

  static ROUTE() {
    return "KernelEvents::ROUTE";
  }

  static CONTROLLER() {
    return "KernelEvents::CONTROLLER";
  }

  static RESPONSE() {
    return "KernelEvents::RESPONSE";
  }

  static EXCEPTION() {
    return "KernelEvents::EXCEPTION";
  }

}

exports.default = KernelEvents;
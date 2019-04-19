"use strict";

exports.default = void 0;

class KernelEvents {}

exports.default = KernelEvents;
KernelEvents.REQUEST = "KernelEvents::REQUEST";
KernelEvents.ROUTE = "KernelEvents::ROUTE";
KernelEvents.CALL_CONTROLLER = "KernelEvents::CONTROLLER";
KernelEvents.RESPONSE = "KernelEvents::RESPONSE";
KernelEvents.EXCEPTION = "KernelEvents::EXCEPTION";
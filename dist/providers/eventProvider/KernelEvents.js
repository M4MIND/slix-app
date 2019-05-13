"use strict";

exports.default = void 0;

class KernelEvents {}

exports.default = KernelEvents;
KernelEvents.REQUEST = 'KernelEvents::REQUEST';
KernelEvents.ROUTE = 'KernelEvents::ROUTE';
KernelEvents.CALL_CONTROLLER = 'KernelEvents::CALL_CONTROLLER';
KernelEvents.CONTROLLER_ARGUMENTS = 'KernelEvents::CONTROLLER_ARGUMENTS';
KernelEvents.RESPONSE = 'KernelEvents::RESPONSE';
KernelEvents.TERMINATE = 'KernelEvents::TERMINATE';
KernelEvents.EXCEPTION = 'KernelEvents::EXCEPTION';
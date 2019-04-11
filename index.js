module.exports = require('./dist/Slix').default;
module.exports.Slix = require('./dist/Slix').default;
module.exports.Container = require('./dist/container/Container').default;

module.exports.EventDispatcher = require('./dist/providers/event/EventDispatcher').default;

/** Providers */
module.exports.AbstractProvider = require('./dist/api/AbstractProvider').default;
module.exports.LoggerServiceProvider = require('./dist/providers/LoggerServiceProvider').default;
module.exports.ProtocolServiceProvider = require('./dist/providers/ProtocolServiceProvider').default;
module.exports.EventDispatcherServiceProcider = require('./dist/providers/EventDispatcherServiceProvider').default;
module.exports.TwigServiceProvider = require('./dist/providers/TwigServiceDispatcher').default;
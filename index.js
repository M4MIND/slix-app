module.exports = require('./dist/Slix').default;
module.exports.Slix = require('./dist/Slix').default;
module.exports.Container = require('./dist/container/Container').default;

/** CORE **/
module.exports.Request = require('./dist/core/request/Request').default;
module.exports.PreparationResponse = require('./dist/core/response/PreparationResponse').default;

/** API **/
module.exports.AbstractProvider = require('./dist/api/AbstractProvider').default;

/** PROVIDERS **/
module.exports.ControllerServiceProvider = require('./dist/providers/ControllerServiceProvider').default;

module.exports.EventDispatcherServiceProvider = require('./dist/providers/EventDispatcherServiceProvider').default;
module.exports.FileTransferServiceProvider = require('./dist/providers/FileTransferServiceProvider').default;
module.exports.LoggerServiceProvider = require('./dist/providers/LoggerServiceProvider').default;
module.exports.ProtocolServiceProvider = require('./dist/providers/ProtocolServiceProvider').default;
module.exports.RouterServiceProvider = require('./dist/providers/RouterServiceProvider').default;
module.exports.TwigServiceProvider = require('./dist/providers/TwigServiceProvider').default;

/** PROVIDERS MODULE **/
module.exports.EventDispatcherServiceProvider.EventDispatcher = require('./dist/providers/event/EventDispatcher').default;
module.exports.EventDispatcherServiceProvider.EventRequest = require('./dist/providers/event/EventRequest').default;
module.exports.EventDispatcherServiceProvider.KernelEvents = require('./dist/providers/event/KernelEvents').default;
module.exports.LoggerServiceProvider.Log = require('./dist/providers/logger/Log').default;
module.exports.LoggerServiceProvider.LogFile = require('./dist/providers/logger/LogFile').default;
module.exports.ProtocolServiceProvider.HTTP = require('./dist/providers/protocol/HTTP').default;

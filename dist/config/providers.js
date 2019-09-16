'use strict';

exports.default = void 0;

var _EventDispatcherProvider = require('../providers/EventDispatcherProvider');

var _ExceptionProvider = require('../providers/ExceptionProvider');

var _LoggerProvider = require('../providers/LoggerProvider');

var _ProtocolProvider = require('../providers/ProtocolProvider');

var _FileTransferProvider = require('../providers/FileTransferProvider');

var _RouterProvider = require('../providers/RouterProvider');

var _ControllerProvider = require('../providers/ControllerProvider');

var _default = [
  {
    provider: _ControllerProvider.default,
    params: {
      path: '/controllers/',
    },
  },
  {
    provider: _EventDispatcherProvider.default,
  },
  {
    provider: _ExceptionProvider.default,
    params: {
      renderingPage: true,
      consoleLog: true,
    },
  },
  {
    provider: _LoggerProvider.default,
    params: {
      console: false,
      writeFile: false,
      pathFile: '/logs/',
      recordEventsLevel: [100, 200, 300, 500],
    },
  },
  {
    provider: _ProtocolProvider.default,
    params: {
      protocol: 'http',
      host: 'localhost',
      port: 10000,
    },
  },
  {
    provider: _FileTransferProvider.default,
    params: {
      path: '/static/',
      foldersWithAccess: {},
      defaultContentType: {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.ico': 'image/x-icon',
      },
      customContentType: {},
    },
  },
  {
    provider: _RouterProvider.default,
  },
];
exports.default = _default;

import EventDispatcherProvider from '../providers/EventDispatcherProvider';
import ExceptionProvider from '../providers/ExceptionProvider';
import LoggerProvider from '../providers/LoggerProvider';
import ProtocolProvider from '../providers/ProtocolProvider';
import FileTransferProvider from '../providers/FileTransferProvider';
import RouterProvider from '../providers/RouterProvider';
import ControllerProvider from '../providers/ControllerProvider';

export default [
  {
    provider: ControllerProvider,
    params: {
      path: '/controllers/',
    },
  },
  {provider: EventDispatcherProvider},
  {
    provider: ExceptionProvider,
    params: {
      renderingPage: true,
      consoleLog: true,
    },
  },
  {
    provider: LoggerProvider,
    params: {
      console: false,
      writeFile: false,
      pathFile: '/logs/',
      recordEventsLevel: [100, 200, 300, 500],
    },
  },
  {
    provider: ProtocolProvider,
    params: {
      protocol: 'http',
      host: 'localhost',
      port: 10000,
    },
  },
  {
    provider: FileTransferProvider,
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
  {provider: RouterProvider},
];

import {Slix, Response} from '../index';
import providers from './config/providers';

let server = new Slix();

server.addProviders(providers);

server.run(() => {
  console.dir('Run server');

  server._mount('/', 'GET', () => {
    return new Response('index');
  })
});
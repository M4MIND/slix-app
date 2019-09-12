import {Slix} from '../index';
import providers from './config/providers';
import TwigProvider from 'slix-twig-provider';

let server = new Slix();

server.addProviders(providers);

server.run();
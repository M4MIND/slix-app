import {SlixTwigProvider} from 'slix-app-twig';
import {ExceptionProvider} from '../../index.js';

export default [
  {provider: SlixTwigProvider},
  {
    provider: ExceptionProvider, params: {
      consoleLog: true,
      renderingPage: true
    },
  },
];
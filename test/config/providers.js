import {ProtocolProvider, FileTransferProvider, ControllerProvider} from "../../index";
import TwigProvider from 'slix-twig-provider';

export default [
    {provider: ProtocolProvider},
    {provider: FileTransferProvider},
    {provider: ControllerProvider}
]
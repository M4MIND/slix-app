import {Slix, ProtocolServiceProvider, FileTransferServiceProvider} from '../index';
import config from "./config/config.json";

let server = new Slix();

server.replaceParamProvider(ProtocolServiceProvider, config.protocol);
server.replaceParamProvider(FileTransferServiceProvider, config.fileTransfer);

server.run();
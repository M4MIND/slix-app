import {Slix, ProtocolProvider, FileTransferProvider} from '../index';
import config from "./config/config.json";

let server = new Slix();

server.replaceParamProvider(ProtocolProvider, config.protocol);
server.replaceParamProvider(FileTransferProvider, config.fileTransfer);

server.run();
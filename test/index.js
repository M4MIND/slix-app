import {Slix, ProtocolProvider, FileTransferProvider} from '../index';
import config from "./config/config.json";

let server = new Slix();

server.setParam(ProtocolProvider, config.protocol);
server.setParam(FileTransferProvider, config.fileTransfer);

server.run();
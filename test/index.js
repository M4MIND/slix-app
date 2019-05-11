let {Slix, ProtocolServiceProvider, FileTransferServiceProvider} = require('../index');

let server = new Slix();

server.setParam(ProtocolServiceProvider.getName(), {
    port: 10000,
});

server.setParam(FileTransferServiceProvider.getName(), {
    foldersWithAccess: {
        "rigel-ui": '..\\node_modules\\rigel-ui\\dist\\css\\'
    }
});

server.run();
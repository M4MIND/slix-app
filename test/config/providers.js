import {TwigProvider, ProtocolProvider, FileTransferProvider, ControllerProvider} from "../../index";

export default [
    [TwigProvider, {
        path: 'views'
    }],
    [ProtocolProvider, {
        "port": 4000
    }],
    [FileTransferProvider, {
        "foldersWithAccess": {
            "rigel-ui": "..\\node_modules\\rigel-ui\\dist\\css\\"
        }
    }],
    [ControllerProvider]
]
import {TwigProvider, ProtocolProvider, FileTransferProvider} from "../../index";

export default [
    [TwigProvider, {}],
    [ProtocolProvider, {
        "port": 4050
    }],
    [FileTransferProvider, {
        "foldersWithAccess": {
            "rigel-ui": "..\\node_modules\\rigel-ui\\dist\\css\\"
        }
    }]
]
import {ProtocolProvider, FileTransferProvider, ControllerProvider} from "../../index";
import TwigProvider from 'slix-twig-provider';

export default [
    [TwigProvider, {
        path: 'views'
    }],
    [ProtocolProvider],
    [FileTransferProvider, {
        "foldersWithAccess": {
            "rigel-ui": "..\\node_modules\\rigel-ui\\dist\\css\\"
        }
    }],
    [ControllerProvider]
]
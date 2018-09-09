require('../lib/index');
import {CollectManager} from "./collect/CollectManager";
import {AppWebServer} from "./server/WebServer";

CollectManager.getInstance().init();
AppWebServer.getInstance().init();

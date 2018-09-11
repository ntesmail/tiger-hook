import { tigerHook }  from '../lib'
import {CollectManager} from "./collect/CollectManager";
import {AppWebServer} from "./server/WebServer";

tigerHook('tiger-hook-web');

CollectManager.getInstance().init();
AppWebServer.getInstance().init();

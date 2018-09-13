import { tigerHook }  from '../lib'
import {CollectManager} from "./collect/CollectManager";
import {AppWebServer} from "./server/WebServer";

tigerHook({appName: 'tiger-hook-web', IpAddress: "127.0.0.1"});

CollectManager.getInstance().init();
AppWebServer.getInstance().init();

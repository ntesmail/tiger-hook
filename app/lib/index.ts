import {HookManage} from "./hook/hook";
const packageJson = require('./package.json');

console.log(packageJson.version);

export function tigerHook(appName: string){
    HookManage.getInstance().initHooks();
}

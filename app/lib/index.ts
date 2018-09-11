import {HookManage} from "./hook/hook";
import {HookAppConfig, IHookConfigOptions} from "./hook/HookAppConfig";
const packageJson = require('./package.json');

console.log(packageJson.version);

export function tigerHook(iHookConfig: IHookConfigOptions){
    HookAppConfig.getInstance().setConfig(iHookConfig);
    HookManage.getInstance().initHooks();
}

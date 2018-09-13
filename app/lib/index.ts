import {HookManage} from "./hook/hook";
import {HookAppConfig, IHookConfigOptions} from "./hook/HookAppConfig";
const packageJson = require('./package.json');

export function tigerHook(iHookConfig: IHookConfigOptions){
    iHookConfig.version = packageJson.version;
    HookAppConfig.getInstance().setConfig(iHookConfig);
    HookManage.getInstance().initHooks();
}

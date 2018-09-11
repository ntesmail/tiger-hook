import {AxonRpcClient} from "../client/AxonRpcClient";

export interface IHookConfigOptions {
    appName: String
}

export class HookAppConfig{
    static __instance: HookAppConfig;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new HookAppConfig();
        return this.__instance;
    }

    appName: String = '';

    axonClient: AxonRpcClient;

    constructor(){
        this.axonClient = AxonRpcClient.getInstance();
    }

    setConfig(iHookConfig: IHookConfigOptions){
        this.appName = iHookConfig.appName;
        this.axonClient.send('app', {
            appName: this.appName
        });
    }

}
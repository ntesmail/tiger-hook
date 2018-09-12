import {AxonRpcClient} from "../client/AxonRpcClient";

export interface IHookConfigOptions {
    appName: String,
    IpAddress?: String
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
    IpAddress: String = '';

    axonClient: AxonRpcClient;

    constructor(){
        this.axonClient = AxonRpcClient.getInstance();
    }

    setConfig(iHookConfig: IHookConfigOptions){
        this.appName = iHookConfig.appName;
        if(iHookConfig.IpAddress){
            this.IpAddress = iHookConfig.IpAddress;
        }
        this.axonClient.send('app', {
            appName: this.appName,
            IpAddress: this.IpAddress
        });
    }

}
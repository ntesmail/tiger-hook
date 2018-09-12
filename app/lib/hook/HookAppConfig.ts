import {AxonRpcClient} from "../client/AxonRpcClient";

export interface IHookConfigOptions {
    appName: String,
    IpAddress?: String,
    axon?: Map<String, Number>
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
    axon: Map<String, any> = new Map<String, any>();

    axonClient: AxonRpcClient;

    constructor(){
        this.axonClient = AxonRpcClient.getInstance();
        this.axon.set("port", 4000);
        this.axon.set("host", '127.0.0.1');
    }

    setConfig(iHookConfig: IHookConfigOptions){
        this.appName = iHookConfig.appName;
        if(iHookConfig.IpAddress){
            this.IpAddress = iHookConfig.IpAddress;
        }
        if(iHookConfig.axon){
            if(iHookConfig.axon.get("host")){
                this.axon.set("host", iHookConfig.axon.get("host"));
            }
            if(iHookConfig.axon.get("port")){
                this.axon.set("port", iHookConfig.axon.get("port"));
            }
        }
        this.axonClient.send('app', {
            appName: this.appName,
            IpAddress: this.IpAddress
        });
    }

}
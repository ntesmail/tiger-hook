import * as axon from "axon";
import {Socket} from "axon";
import {HookAppConfig} from "../hook/HookAppConfig";
var rpc = require('axon-rpc');

export class AxonRpcClient{
    static __instance: AxonRpcClient;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new AxonRpcClient();
        return this.__instance;
    }

    req: Socket;
    client: any;

    constructor() {
        this.req = axon.socket('req');
        this.client = new rpc.Client(this.req);
        this.req.connect(HookAppConfig.getInstance().axon.get("port"), <String>HookAppConfig.getInstance().axon.get("host"));
    }

    send(type: string, params: any){
        params["time"] = new Date().getTime();
        params["appName"] = HookAppConfig.getInstance().appName;
        this.client.call(type, params, (res: any)=>{
            // console.log(res)
        });
    }

    destory(){
        this.req.close();
    }
}
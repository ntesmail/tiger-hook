import * as axon from "axon";
import {Socket} from "axon";
var rpc = require('axon-rpc');

export class AxonRpcServer{
    static __instance: AxonRpcServer;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new AxonRpcServer();
        return this.__instance;
    }

    rep: Socket;
    server: any;

    constructor() {
        this.rep = axon.socket('rep');
        this.server = new rpc.Server(this.rep);
        this.rep.bind(4000);
    }

    expose(type: string, processFunction: Function){
        this.server.expose(type, processFunction);
    }

    destory(){
        this.rep.close();
    }
}
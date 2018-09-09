import {ICollect} from "./ICollect";
import {ErrorCollect} from "./Impl/ErrorCollect";
import {HeapCollect} from "./Impl/HeapCollect";
import {AxonRpcServer} from "../server/AxonRpcServer";

export class CollectManager{
    collects: any[];
    collectMap: Map<String, ICollect> = new Map<String, ICollect>();
    axonRpcServer: AxonRpcServer;

    static __instance: CollectManager;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new CollectManager();
        return this.__instance;
    }

    constructor(){
        this.collects = [ErrorCollect, HeapCollect];
        this.axonRpcServer = AxonRpcServer.getInstance();
    }

    init(){
        this.collects.map(item=>{
            const collect: ICollect = <ICollect>new item();
            this.axonRpcServer.expose(collect.exposeType, collect.processResult.bind(collect));
            this.collectMap.set(collect.exposeType, collect);
        })
    }

}
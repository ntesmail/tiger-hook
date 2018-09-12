import {IHook} from "../IHook";
import {AxonRpcClient} from "../../client/AxonRpcClient";

export class HeapHook implements IHook{

    static __instance: HeapHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new HeapHook();
        return this.__instance;
    }
    axonClient: AxonRpcClient;

    constructor(){
        this.axonClient = AxonRpcClient.getInstance();
    }

    /**
     * description: hook查看堆栈信息
     * author: 金炳<hzjinbing@163.com>
     */
    hook(): void  {
        setInterval(()=>{
            let params = {
                mem: process.memoryUsage()
            };
            this.axonClient.send('heap', params)
        }, 5 * 1000 * 60);
    }

}
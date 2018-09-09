import {IHook} from "../IHook";
import {AxonRpcClient} from "../../client/AxonRpcClient";
import * as shimmer from "shimmer";

export class ErrorHook implements IHook{

    static __instance: ErrorHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new ErrorHook();
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
        shimmer.wrap(console, 'error', (original)=>{
            let self = this;
            return function(){
                try{
                    throw new Error();
                }catch(e){
                    let results = e.stack.split('\n');
                    results = results.filter((item: any, index: number)=>{
                        if(index == 1){
                            return false;
                        }
                        return index <= (results.length - 6);
                    });
                    const errorInfo = {
                        message: arguments[0],
                        stack: results.join('\n')
                    };
                    self.axonClient.send('error', errorInfo)
                }
            }
        });
    }

}
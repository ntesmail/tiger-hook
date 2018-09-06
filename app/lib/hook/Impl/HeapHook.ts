import {IHook} from "../IHook";

export class HeapHook implements IHook{

    static __instance: HeapHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new HeapHook();
        return this.__instance;
    }

    /**
     * description: hook查看堆栈信息
     * author: 金炳<hzjinbing@163.com>
     */
    hook(): void  {
        setInterval(()=>{
            // console.error(process.memoryUsage());
        }, 1000);
    }

}
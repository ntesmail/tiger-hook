import {IHook} from "./IHook";
import {HttpHook} from "./Impl/HttpHook";
import {HeapHook} from "./Impl/HeapHook";
import {ConsoleHook} from "./Impl/ConsoleHook";

export class HookManage{
    static __instance: HookManage;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new HookManage();
        return this.__instance;
    }

    initHooks(){
        const hooks: any[] = [HttpHook, HeapHook, ConsoleHook];

        hooks.map(hookClass=>{
            const hook: IHook = hookClass.getInstance();
            hook.hook();
        });
    }
}
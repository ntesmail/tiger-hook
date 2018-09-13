import {IHook} from "../IHook";
import * as shimmer from 'shimmer';
import * as http from 'http';

export class HttpHook implements IHook{

    static __instance: HttpHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new HttpHook();
        return this.__instance;
    }

    /**
     * @override
     * description: hook对应的
     * author: 金炳<hzjinbing@163.com>
     */
    hook(): void  {
        shimmer.wrap(http, 'request', original => {
            return function(){
                //console.log("====>request");
                // @ts-ignore
                const result = original.apply(this, arguments);
                return result;
            }
        })
    }

}
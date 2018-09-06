import {IHook} from "../IHook";
import * as shimmer from 'shimmer';

export class ConsoleHook implements IHook{

    static __instance: ConsoleHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new ConsoleHook();
        return this.__instance;
    }

    hook(): void {
        shimmer.wrap(console, 'error', original => {
            return function(){
                // @ts-ignore
                const returned = original.apply(this, arguments);
                return returned;
            }
        });
    }

}
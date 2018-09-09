import {IHook} from "../IHook";

export class ProcessErrorHook implements IHook{
    static __instance: ProcessErrorHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new ProcessErrorHook();
        return this.__instance;
    }

    hook(): void {
        process.on("uncaughtException", function(err){
            console.log(err);
        });
    }

}
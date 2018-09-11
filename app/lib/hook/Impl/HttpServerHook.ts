import {IHook} from "../IHook";
import * as shimmer from "shimmer";
import * as http from 'http';
import {IncomingMessage, Server, ServerResponse} from "http";
import {AxonRpcClient} from "../../client/AxonRpcClient";

export class HttpServerHook implements IHook{
    static __instance: HttpServerHook;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new HttpServerHook();
        return this.__instance;
    }

    axonClient: AxonRpcClient;

    constructor(){
        this.axonClient = AxonRpcClient.getInstance();
    }

    hook(): void {
        let self = this;
        shimmer.wrap(http, 'createServer', (original:(requestListener?: (request: any, response: any) => void)=>Server) => {
            return function wrapCreateServer(this: any, requestListener?: (request: any, response: any)=> void){
                if(requestListener){
                    const listener = function Listener(request: any, response: any){
                        let startTime = new Date().getTime();
                        let reqParams = {
                            startTime: startTime,
                            useTime: 0,
                            method: request.method,
                            url: request.url
                        };
                        function onFinishedFactory(eventName: string){
                            return function onFinished(){
                                response.removeListener("finish", onFinished);
                                request.removeListener("error", onFinished);
                                request.removeListener("close", onFinished);
                                reqParams.useTime = new Date().getTime() - startTime;
                                self.axonClient.send('http', reqParams);
                            }
                        }
                        response.once('finish', onFinishedFactory('finish'));
                        request.once('error', onFinishedFactory('error'));
                        request.once('close', onFinishedFactory('close'));
                        return requestListener(request, response);
                    };
                    // @ts-ignore
                    return original.call(this, listener);
                }
                // @ts-ignore
                const result = original.apply(this, arguments);
                return result;
            }
        })
    }

}
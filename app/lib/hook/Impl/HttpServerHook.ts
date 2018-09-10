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
        shimmer.wrap(http, 'createServer', (original:(requestListener?: (request: IncomingMessage, response: ServerResponse) => void)=>Server) => {
            return function wrapCreateServer(this: any, requestListener?: (request: IncomingMessage, response: ServerResponse)=> void){
                if(requestListener){
                    const listener = function Listener(request: IncomingMessage, response: ServerResponse){
                        let startTime = new Date().getTime();
                        console.log(request.method, request.url);
                        let reqParams = {
                            startTime: startTime,
                            useTime: 0,
                            method: request.method,
                            url: request.url
                        };
                        requestListener(request, response);
                        function onFinishedFactory(eventName: string){
                            return function onFinished(){
                                response.removeListener("finish", onFinished);
                                request.removeListener("error", onFinished);
                                request.removeListener("close", onFinished);
                                console.log(`eventName=${eventName} useTime= ${new Date().getTime() - startTime}ms`);
                                reqParams.useTime = new Date().getTime() - startTime;
                                console.log(reqParams);
                                self.axonClient.send('http', reqParams);
                            }
                        }
                        response.once('finish', onFinishedFactory('finish'));
                        request.once('error', onFinishedFactory('error'));
                        request.once('close', onFinishedFactory('close'));
                        return;
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
const express = require('express');
import {IWebController} from "./controller/IWebController";
import {WebHelloController} from "./controller/impl/WebHelloController";
import {ErrorController} from "./controller/impl/ErrorController";
import {PathParams} from "express-serve-static-core";

export class AppWebServer{
    static __instance: AppWebServer;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new AppWebServer();
        return this.__instance;
    }

    app: any;

    controllerNames: any[];
    controllers: Map<String, IWebController>;

    constructor(){
        this.app = express();
        this.controllerNames = [WebHelloController, ErrorController];
        this.controllers = new Map<String, IWebController>();
    }

    init(){
        this.controllerNames.map(controllerName=>{
            const webController: IWebController = <IWebController>new controllerName();
            this.app.use(<PathParams>webController.prefix, webController.processResult.bind(webController));
            this.controllers.set(webController.prefix, webController);
        });
        this.app.listen(8002, (err: any)=>{
            if(err){
                console.log("listen in 8002 failed.");
                process.exit(1);
            }
            console.log("====>listen in 8002");
        });
    }
}
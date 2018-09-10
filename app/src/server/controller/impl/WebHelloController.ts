import {IWebController} from "../IWebController";
import {AppRedisClient} from "../../../client/RedisClient";
import {RedisClient} from "redis";
import {NextFunction, Request, Response} from "express";

export class WebHelloController implements IWebController{
    prefix: String = '/xhr/application/getProcessInfo.do';
    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    async processResult(req: Request, res: Response, next: NextFunction) {
        let startTime = new Date().getTime();
        let item = await new Promise((resolve, reject)=>{
            let time = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate());
            this.redisClient.get("mem_" + time, (err, result)=>{
                if(err){
                    reject(null);
                }
                resolve(JSON.parse(result));
            })
        });
        console.log(`useTime: ${new Date().getTime() - startTime}ms`);
        let result = {
            code: 200,
            data: item
        };
        res.send(result);

    }
}
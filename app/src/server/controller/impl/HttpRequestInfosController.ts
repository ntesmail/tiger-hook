import {IWebController} from "../IWebController";
import {NextFunction, Request, Response} from "express";
import {RedisClient} from "redis";
import {AppRedisClient} from "../../../client/RedisClient";
import {utils} from "../../../utils/utils";

export class HttpRequestInfosController implements IWebController{
    prefix: String = '/xhr/application/getHttpRequestInfos.do';

    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(req: Request, res: Response, next: NextFunction): void {
        let {time} = utils.getTime({time: new Date().getTime()});
        console.log("http_" + time);
        this.redisClient.keys("http_" + time + "_/xhr*", (err, result)=>{
            if(err){
                return;
            }

            let promises: any[] = [];
            for(let i = 0; i < result.length; i++){
                let tmp = result[i];
                let promise = new Promise((resolve, reject)=>{
                    this.redisClient.get(result[i], (err, result)=>{
                        resolve({
                            url: tmp.substring(("http_" + time+ "_").length, tmp.lastIndexOf("_")),
                            method: tmp.substring(tmp.lastIndexOf("_") + 1),
                            count: JSON.parse(result).useTimes.length,
                            averageUseTime: ((JSON.parse(result).useTimes.reduce(((previousValue:number, currentValue: number) => {return previousValue + currentValue}), 0))/(JSON.parse(result).count)).toFixed(2)
                        })
                    });
                });
                promises.push(promise);
            }
            Promise.all(promises).then(function(values){
                res.send({
                    code: 200,
                    data: values
                })
            })
        });
    }
}
import {IWebController} from "../IWebController";
import {NextFunction, Request, Response} from "express";
import {utils} from "../../../utils/utils";
import {RedisClient} from "redis";
import {AppRedisClient} from "../../../client/RedisClient";
import {HttpUtils} from "../../../utils/HttpUtils";

export class ErrorMessageController implements IWebController{
    prefix: String = '/xhr/application/getErrorMessage.do';

    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(req: Request, res: Response, next: NextFunction): void {
        let {time} = utils.getTime({time: new Date().getTime()});
        console.log("error_" + time);
        this.redisClient.get("error_" + time , (err, result)=> {
            if(err){
                return res.send(HttpUtils.success({}))
            }
            if(result){
                let errors = JSON.parse(result);
                let keys = Object.keys(errors);
                console.log(keys);
                res.send(HttpUtils.success(errors));
            }else{
                res.send(HttpUtils.success({}))
            }
        });
    }
}
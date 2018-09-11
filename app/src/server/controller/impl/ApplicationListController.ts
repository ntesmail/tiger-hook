import {IWebController} from "../IWebController";
import {NextFunction, Request, Response} from "express";
import {RedisClient} from "redis";
import {AppRedisClient} from "../../../client/RedisClient";
import {HttpUtils} from "../../../utils/HttpUtils";

export class ApplicationListController implements IWebController{
    prefix: String = '/xhr/application/getAppList.do';

    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(req: Request, res: Response, next: NextFunction): void {
        this.redisClient.get("app", (err, result)=> {
            let apps = JSON.parse(result);
            res.send(HttpUtils.success(apps));
        });
    }
}
import {ICollect} from "../ICollect";
import {utils} from "../../utils/utils";
import {AppRedisClient} from "../../client/RedisClient";
import {RedisClient} from "redis";

export class AppCollect implements ICollect{
    exposeType: string = 'app';
    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(data: any, fn: Function) {
        this.redisClient.get("app", (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            let currentValue: any[] = [];
            if(result != null){
                currentValue = JSON.parse(result);
            }
            if(currentValue.indexOf(data.appName) < 0){
                currentValue.push(data.appName);
            }
            this.redisClient.set("app", JSON.stringify(currentValue));
        });
        fn(null, 3);
    }

}
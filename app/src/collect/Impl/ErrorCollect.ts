import {ICollect} from "../ICollect";
import {utils} from "../../utils/utils";
import {AppRedisClient} from "../../client/RedisClient";
import {RedisClient} from "redis";
const utility = require('utility');

export class ErrorCollect implements ICollect{
    exposeType: string = 'error';
    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(data: any, fn: Function) {
        console.log('===>error');
        let { time } = utils.getTime(data);
        console.log(time);
        let tmp = {
            message: data.message,
            stack: data.stack
        };
        let md5 = utility.md5(tmp);
        this.redisClient.get("error_" + data.appName + "_" + time, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            let currentValue: any = {};
            if(result != null){
                currentValue = JSON.parse(result);
            }
            if(currentValue[md5]){
                currentValue[md5].count++;
                currentValue[md5].lastTime = data.time
            }else{
                if(typeof data.message != 'string'){
                    data.message = JSON.stringify(data.message);
                }
                currentValue[md5] = {
                    message: data.message,
                    stack: data.stack,
                    count: 1,
                    lastTime: data.time
                };
            }
            this.redisClient.set("error_" +  data.appName + "_" + time, JSON.stringify(currentValue));
        });
        this.redisClient.get("error_" + data.appName + "_" + md5, (err, result)=>{
            if(err){
                return;
            }
            let currentValue: any = {
                times: []
            };
            if(result != null){
                currentValue = JSON.parse(result);
            }
            if(!currentValue.info){
                currentValue.info = {
                    message: data.message,
                    stack: data.stack,
                }
            }
            currentValue.times.push(data.time);
            this.redisClient.set("error_" +  data.appName + "_" + md5, JSON.stringify(currentValue));
        });
        fn(null, 3);
    }

}
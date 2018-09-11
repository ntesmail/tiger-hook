import {ICollect} from "../ICollect";
import {utils} from "../../utils/utils";
import {AppRedisClient} from "../../client/RedisClient";
import {RedisClient} from "redis";
const utility = require('utility');

export class RequestCollect implements ICollect{
    exposeType: string = 'http';
    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(data: any, fn: Function) {
        // console.log('===>error');
        let { time } = utils.getTime(data);
        console.log(time);
        console.log(data);
        this.redisClient.get(`http_${time}_${data.url}_${data.method}`, (err, result)=>{
            if(err){
                return;
            }
            let currentValue: any = {
                count: 0,
                useTimes: []
            };
            if(result != null){
                currentValue = JSON.parse(result);
            }
            currentValue.count = currentValue.count + 1;
            currentValue.useTimes.push(data.useTime);
            this.redisClient.set(`http_${time}_${data.url}_${data.method}`, JSON.stringify(currentValue));
        });
        fn(null, 3);
    }

}
import {ICollect} from "../ICollect";
import {utils} from "../../utils/utils";
import {RedisClient} from "redis";
import {AppRedisClient} from "../../client/RedisClient";

export class HeapCollect implements ICollect{
    exposeType: string = 'heap';
    redisClient: RedisClient;

    constructor(){
        this.redisClient = AppRedisClient.getInstance().getClient();
    }

    processResult(data: any, fn: Function) {
        let { time, num } = utils.getTime(data);

        this.redisClient.get("mem_" + time, (err, result)=>{
            if(err){
                return;
            }
            let currentValue: any = {}
            if(result != null){
                currentValue = JSON.parse(result);
            }
            currentValue[`${num}`] = data.mem;
            this.redisClient.set("mem_" + time, JSON.stringify(currentValue));
        });
        fn(null, 3);
    }

}
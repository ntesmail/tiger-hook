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
        fn(null, 3);
    }

}
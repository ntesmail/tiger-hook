import * as redis from 'redis';
import {RedisClient} from "redis";
import {IClient} from "./IClient";

export class AppRedisClient implements IClient{
    static __instance: AppRedisClient;

    static getInstance(){
        if(this.__instance){
            return this.__instance;
        }
        this.__instance = new AppRedisClient();
        return this.__instance;
    }

    client: RedisClient;

    constructor(){
        this.client = redis.createClient({
            host: '127.0.0.1',
            port: 32768
        });
    }

    getClient(){
        return this.client;
    }

    /**
     * description: 健康检查
     * author: 金炳<hzjinbing@163.com>
     */
    async getHealthStatus(): Promise<boolean> {
        return true;
    }
}
import {RedisClient} from "redis";
import {AppRedisClient} from "../../client/RedisClient";

export abstract class BaseWebController{
    redisClient: RedisClient = AppRedisClient.getInstance().getClient();
}
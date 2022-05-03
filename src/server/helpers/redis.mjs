import redis from 'redis';
import {promisify} from 'util';
import config from './config.mjs';

const client = redis.createClient({
	url: config.redisEndpoint,
	password: config.redisPassword,
});

export const getGameData = promisify(client.get).bind(client);
export const setGameData = promisify(client.set).bind(client);
export const delGameData = promisify(client.del).bind(client);


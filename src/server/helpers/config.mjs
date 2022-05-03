import dotenv from 'dotenv';

const isEnvFound = dotenv.config();
if (!isEnvFound) {
	throw new Error('.env file is not found');
};

const config = {};

config.port = process.env.PORT || 3030;
config.redisEndpoint = process.env.REDIS_ENDPOINT;
config.redisPassword = process.env.REDIS_PASSWORD;

export default config;

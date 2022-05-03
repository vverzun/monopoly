import http from 'http';
import WebSocket from 'ws';
import redis from 'redis';
import {promisify} from 'util';
import Banker from '../lib/Banker/Banker.mjs';
import Logger from '../lib/Logger/Logger.mjs';
import config from './helpers/config.mjs';
import socket from './helpers/socket.mjs';
import processRequest from './helpers/processRequest.mjs';
import response from './response/response.mjs';

const server = http.createServer();
export const wss = new WebSocket.Server({server});

const redisClient = redis.createClient({
	url: config.redisEndpoint,
	password: config.redisPassword
});

const getGameData = promisify(redisClient.get).bind(redisClient);
export const setGameData = promisify(redisClient.set).bind(redisClient);
const delGameData = promisify(redisClient.del).bind(redisClient);
(async () => {
	const gameData = await getGameData('game');
	const logger = Logger.create();
	const banker = Banker.create(logger);
	//await delGameData('game');	
	if (gameData) {
		console.log('found game data');
		banker.retrieveLastGameData(JSON.parse(gameData));
	};
	
	wss.on('connection', (ws) => {
		socket.registerWSConnection(ws);

		console.log('ws connected');
		
		ws.on('message', async (request) => {
			try {
				await processRequest(JSON.parse(request), banker, ws);
			} catch (error) {
				console.log(error);
				response.error(ws.id, error.message);
			};
		});

		ws.on('close', () => {
			//send action that person leaved from server
			console.log('ws disconnected');
			banker.removeClient(ws.id);
		});
	});

	socket.heartbeat();

	server.listen(config.port, () => {
		console.log(`Server started on port ${config.port}`);
	});
})();
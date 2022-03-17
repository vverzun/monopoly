import http from 'http';
import WebSocket from 'ws';
import Banker from '../lib/Banker/Banker.mjs';
import Logger from '../lib/Logger/Logger.mjs';
import config from './helpers/config.mjs';
import socket from './helpers/socket.mjs';
import processRequestData from './helpers/processRequestData.mjs';
import {gameEvents} from './events.mjs';

const server = http.createServer();
export const wss = new WebSocket.Server({server});

const logger = Logger.create();
const banker = Banker.create(logger);

wss.on('connection', (ws) => {
	socket.registerWSConnection(ws);

	ws.on('message', (request) => {
		try {
			processRequestData(socket.parseRequest(request), banker, ws);
			socket.broadcast(banker);
		} catch (error) {
			console.log(error);
			ws.send(JSON.stringify({
				type: gameEvents.ERROR,
				error: error,
			}));
		};
	});

	ws.on('close', () => {
		banker.removePlayer(ws.id);
	});
});

socket.heartbeat();

server.listen(config.port, () => {
	console.log(`Server started on port ${config.port}`);
});

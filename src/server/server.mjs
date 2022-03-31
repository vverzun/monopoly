import http from 'http';
import WebSocket from 'ws';
import Banker from '../lib/Banker/Banker.mjs';
import Logger from '../lib/Logger/Logger.mjs';
import config from './helpers/config.mjs';
import socket from './helpers/socket.mjs';
import processRequest from './helpers/processRequest.mjs';
import response from './response/response.mjs';

const server = http.createServer();
export const wss = new WebSocket.Server({server});

const logger = Logger.create();
const banker = Banker.create(logger);

wss.on('connection', (ws) => {
	socket.registerWSConnection(ws);
	
	ws.on('message', (request) => {
		try {
			processRequest(JSON.parse(request), banker, ws);
		} catch (error) {
			console.log(error);
			response.error(ws.id, error.message);
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

import WebSocket from 'ws';
import {wss} from '../server.mjs';
import {gameEvents} from '../events.mjs';
import uuid from 'uuid';

const registerWSConnection = (ws) => {
	ws.id = uuid.v4();
	ws.isAlive = true;
};

const broadcast = (banker) => {
	const response = {
		type: gameEvents.UPDATE,
		gameData: banker.gameData,
	};

	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN) {
			const player = banker.findPlayer(client.id);
			response.playerData = player ? player.playerData : {};

			client.send(JSON.stringify(response));
		};
	});
};

const heartbeat = () => setInterval(() => {
	wss.clients.forEach((ws) => {
		if (!ws.isAlive) return ws.close();

		ws.isAlive = false;
		ws.send(JSON.stringify({type: gameEvents.PING}));
	});
}, 20000);

const parseRequest = (request) => JSON.parse(request);

export default {
	registerWSConnection: registerWSConnection,
	broadcast: broadcast,
	heartbeat: heartbeat,
	parseRequest: parseRequest,
};

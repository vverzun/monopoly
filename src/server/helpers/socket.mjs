import WebSocket from 'ws';
import {wss} from '../server.mjs';
import events from '../events.mjs';
import uuid from 'uuid';

const registerWSConnection = (ws) => {
	ws.id = uuid.v4();
	ws.isAlive = true;
};

const findClient = (id) => {
	for (const client of wss.clients) {
		if (client.id === id) return client;
	}
};

const broadcast = (response, self) => {
	wss.clients.forEach((client) => {
		if (client.id !== self && client.readyState === WebSocket.OPEN) {
			client.send(response);
		};
	});
};

const heartbeat = () => setInterval(() => {
	wss.clients.forEach((ws) => {
		if (!ws.isAlive) return ws.close();

		ws.isAlive = false;
		ws.send(JSON.stringify({type: events.PING}));
	});
}, 20000);

export default {
	registerWSConnection: registerWSConnection,
	findClient: findClient,
	broadcast: broadcast,
	heartbeat: heartbeat,
};

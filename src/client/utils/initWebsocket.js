import {store} from '../public/index';
import {ws} from '../components/App/App';
let pingTimeout;

const initWebsocket = () => {
	ws.onopen = () => heartbeat(pingTimeout);
	ws.onmessage = (response) => {
		response = JSON.parse(response.data);

		switch (response.type) {
		case 'update': store.dispatch(response.action); break;
		case 'ping': heartbeat(); break;
		};
	};

	ws.onclose = () => clearTimeout(pingTimeout);
};

const heartbeat = () => {
	clearTimeout(pingTimeout);

	const request = {
		type: 'pong',
	};

	ws.send(JSON.stringify(request));

	pingTimeout = setTimeout(() => {
		ws.close();
	}, 20000 + 1000);
};

export default initWebsocket;

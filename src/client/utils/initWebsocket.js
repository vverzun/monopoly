import {store} from '../public/index';
import {ws} from '../components/App/App';
import {connect} from '../request/request';
let pingTimeout;

const initWebsocket = () => {
	ws.onopen = () => {
		heartbeat(pingTimeout);
		connect(store.getState());
	};
	ws.onmessage = (response) => {
		response = JSON.parse(response.data);

		switch (response.type) {
		case 'update': store.dispatch(response.action); break;
		case 'ping': heartbeat(); break;
		};
	};
	ws.onerror = () => {
		store.dispatch({
			type: 'changeConnectionStatus',
			payload: {
				isOpen: false,
			},
		});
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

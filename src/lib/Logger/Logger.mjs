import utils from '../utils/utils.mjs';
import response from '../../server/response/response.mjs';
import uuid from 'uuid';

class Logger {
	constructor() {
		this.logs = [];
	};

	static create() {
		return new Logger();
	};

	clear() {
		this.logs = [];
		response.clearLogger();
	};

	log(message) {
		const log = {
			id: uuid.v4(),
			time: utils.currentTime(),
			message: message,
		};

		this.logs.push(log);
		response.log(log);
	};
};

export default Logger;

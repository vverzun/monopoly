import utils from '../utils/utils.mjs';
import uuid from 'uuid';

class Logger {
	constructor() {
		this.logs = [];
	};

	static create() {
		return new Logger();
	};

	get logData() {
		return this.logs.slice(-10);
	};

	clear() {
		this.logs = [];
	};

	log(message) {
		const log = {
			id: uuid.v4(),
			message: `${utils.currentTime()} - ${message}`,
		};

		this.logs.push(log);
	};
};

export default Logger;

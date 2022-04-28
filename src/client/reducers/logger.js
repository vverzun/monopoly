// -----actions-----//
const ADD_NEW_LOG = 'addNewLog';
const CLEAR_LOGGER = 'clearLogger';

// -----reducer-----//
const initialState = {
	logs: [],
};

const logger = (state = initialState, action) => {
	switch (action.type) {
	case ADD_NEW_LOG: return {
		logs: [...state.logs, action.payload.log],
	};
	case CLEAR_LOGGER: return {
		logs: [],
	};
	default: return state;
	};
};

export default logger;

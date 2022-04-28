import {combineReducers} from 'redux';
import banker from './banker';
import player from './player';
import auction from './auction';
import logger from './logger';

const rootReducer = combineReducers({
	banker,
	player,
	auction,
	logger,
});

export default rootReducer;

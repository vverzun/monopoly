import socket from '../helpers/socket.mjs';
import events from '../events.mjs';
import actions from './actions.mjs';
import {
	conditionedPlayers,
	definePlayersPositions,
	definePlayersBuildings,
	definePlayersProperties,
} from '../../lib/Banker/helpers/players.mjs';
import utils from '../../lib/utils/utils.mjs';

const resObj = (actionType, payload) => (
	JSON.stringify({
		type: events.UPDATE,
		action: {
			type: actionType,
			payload: payload,
		},
	})
);

const response = (id, actionType, payload) => {
	socket.findClient(id).send(resObj(actionType, payload));
};

const error = (id, message) => {
	response(id, actions.ERROR, {error: message});
};

const playerDisconnected = (banker) => {
	socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
		players: utils.mapToArray(banker.players),
		clientsCount: banker.clients.size,
		playersCount: banker.players.size,
		readyCount: conditionedPlayers(banker.players, 'isReady'),
	}));
};

const addPlayer = (id, name, banker) => {
	response(id, actions.REGISTER_PLAYER, {
		id: id,
		name: name,
		isLoggedIn: true,
	});

	socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
		players: utils.mapToArray(banker.players),
		clientsCount: banker.players.size,
		playersCount: banker.players.size,
		readyCount: conditionedPlayers(banker.players, 'isReady'),
	}));
};

const changeStatus = (id, status, value, banker) => {
	response(id, actions.CHANGE_STATUS, {
		status: status,
		value: value,
	});

	if (status === 'isReady') {
		socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
			players: utils.mapToArray(banker.players),
			clientsCount: banker.clients.size,
			playersCount: banker.players.size,
			readyCount: conditionedPlayers(banker.players, 'isReady'),
		}));
	}
};

const startGame = (players) => {
	socket.broadcast(resObj(actions.START_GAME, {
		isGameStarted: true,
		playersPositions: definePlayersPositions(players),
	}));
};

const move = (players) => {
	socket.broadcast(resObj(actions.MOVE, {
		playersPositions: definePlayersPositions(players),
	}));
};

const changeBalance = (id, balance) => {
	response(id, actions.CHANGE_BALANCE, {
		balance: balance,
	});

	socket.broadcast(resObj(actions.UPDATE_PLAYER_BALANCE, {
		id: id,
		balance: balance,
	}));
};

const holdProperty = (id, property) => {
	response(id, actions.HOLD_PROPERTY, {
		holdProperty: property,
	});
};

const setInput = (id, inputType) => {
	response(id, actions.PROMPT_INPUT, {
		inputType: inputType,
	});
};

const buyProperty = (id, property, players) => {
	response(id, actions.BUY_PROPERTY, {
		property: property,
	});

	socket.broadcast(resObj(actions.UPDATE_PLAYERS_PROPERTIES, {
		playersProperties: definePlayersProperties(players),
	}));
};

const startAuction = (lot) => {
	socket.broadcast(resObj(actions.SET_UP_AUCTION, {
		lot: lot,
	}));
};

const applyBid = (player, bid) => {
	socket.broadcast(resObj(actions.APPLY_BID, {
		winner: player,
		bid: bid,
	}));
};

const useEscapeCard = (id, freePrisonEscape) => {
	response(id, actions.USE_PRISON_ESCAPE_CARD, {
		freePrisonEscape: freePrisonEscape,
	});
};

const popCard = (id, card) => {
	response(id, actions.POP_CARD, {
		card: card,
	});
};

const applyBuilding = (id, property, players) => {
	response(id, actions.UPDATE_PROPERTY, {
		property: utils.mapToArray(property),
	});

	socket.broadcast(resObj(actions.UPDATE_GAMEBOARD_BUILDINGS, {
		playersBuildings: definePlayersBuildings(players),
	}));
};

const offerTrade = (id, tradeData) => {
	response(id, actions.SHOW_TRADE_OFFER, {
		tradeOffer: tradeData,
	});
};

const log = (log) => {
	socket.broadcast(resObj(actions.ADD_NEW_LOG, {
		log: log,
	}));
};

const clearLogger = () => {
	socket.broadcast(resObj(actions.CLEAR_LOGGER));
};

const trade = (player, partner, players) => {
	response(player.id, actions.UPDATE_PROPERTY, {
		property: utils.mapToArray(player.property),
	});
	response(partner.id, actions.UPDATE_PROPERTY, {
		property: utils.mapToArray(partner.property),
	});

	socket.broadcast(resObj(actions.UPDATE_PLAYERS_PROPERTIES, {
		playersProperties: definePlayersProperties(players),
	}));
};

const connectPlayer = (ws, banker) => {
	response(ws.id, actions.CHANGE_CONNECTION_STATUS, {
		isOpen: true
	});

	socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
		players: utils.mapToArray(banker.players),
		clientsCount: banker.clients.size,
		playersCount: banker.players.size,
		readyCount: conditionedPlayers(banker.players, 'isReady'),
	}));
};

export default {
	playerDisconnected: playerDisconnected,
	error: error,
	trade: trade,
	addPlayer: addPlayer,
	changeStatus: changeStatus,
	startGame: startGame,
	move: move,
	changeBalance: changeBalance,
	holdProperty: holdProperty,
	setInput: setInput,
	buyProperty: buyProperty,
	startAuction: startAuction,
	applyBid: applyBid,
	useEscapeCard: useEscapeCard,
	popCard: popCard,
	applyBuilding: applyBuilding,
	offerTrade: offerTrade,
	log: log,
	clearLogger: clearLogger,
	connectPlayer: connectPlayer
};



import gameboard from '../../lib/mock/gameboardMock.mjs';
// -----actions-----//
const UPDATE_LOBBY_INFO = 'updateLobbyInfo';
const START_GAME = 'startGame';
const MOVE = 'move';
const HOLD_PROPERTY = 'holdProperty';
const UPDATE_PLAYER_BALANCE = 'updatePlayerBalance';
const UPDATE_GAMEBOARD_BUILDINGS = 'updateGameboardBuildings';
const UPDATE_PLAYERS_PROPERTIES = 'updatePlayersProperties';
const CHANGE_CONNECTION_STATUS = 'changeConnectionStatus';
// -----reducer-----//
const initialState = {
	gameboard: gameboard,
	isGameStarted: false,
	clients: [],
	players: [],
	clientsCount: 0,
	playersCount: 0,
	readyCount: 0,
	playersPositions: [],
	playersBuildings: [],
	playersProperties: [],
	holdProperty: {},
	isConnection: true
};

const banker = (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_CONNECTION_STATUS: return {
		...state,
		isConnection: action.payload.isOpen
	};
	case UPDATE_LOBBY_INFO: return {
		...state,
		players: action.payload.players,
		clientsCount: action.payload.clientsCount,
		playersCount: action.payload.playersCount,
		readyCount: action.payload.readyCount,
	};
	case START_GAME: return {
		...state,
		isGameStarted: action.payload.isGameStarted,
		playersPositions: action.payload.playersPositions,
	};
	case MOVE: return {
		...state,
		playersPositions: action.payload.playersPositions,
	};
	case HOLD_PROPERTY: return {
		...state,
		holdProperty: action.payload.holdProperty,
	};
	case UPDATE_PLAYER_BALANCE: return {
		...state,
		players: state.players.map((player) => (
			player.id === action.payload.id ? {
				...player,
				balance: action.payload.balance,
			} : player
		)),
	};
	case UPDATE_GAMEBOARD_BUILDINGS: return {
		...state,
		playersBuildings: action.payload.playersBuildings,
	};
	case UPDATE_PLAYERS_PROPERTIES: return {
		...state,
		playersProperties: action.payload.playersProperties,
	};
	default: return state;
	};
};

export default banker;

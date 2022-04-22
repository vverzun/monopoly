import gameboard from '../../lib/mock/gameboardMock.mjs';
//-----actions-----//
const UPDATE_LOBBY_INFO = 'updateLobbyInfo';
const START_GAME = 'startGame';
const MOVE = 'move';
const HOLD_PROPERTY = 'holdProperty';
const UPDATE_PLAYER_BALANCE = 'updatePlayerBalance';
const UPDATE_GAMEBOARD_BUILDINGS = 'updateGameboardBuildings';
//-----reducer-----//
const initialState = {
    gameboard: gameboard,
    
    isGameStarted: false,
    players: [],
    playersCount: 0,
    readyCount: 0,
    playersPositions: [],
    playersBuildings: [],
    holdProperty: {} 
};

const banker = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOBBY_INFO: return {
            ...state, 
            players: action.payload.players,
            playersCount: action.payload.playersCount,
            readyCount: action.payload.readyCount
        };  
        case START_GAME: return {
            ...state,
            isGameStarted: action.payload.isGameStarted,
            playersPositions: action.payload.playersPositions
        };
        case MOVE: return {
            ...state,
            playersPositions: action.payload.playersPositions
        };
        case HOLD_PROPERTY: return {
            ...state,
            holdProperty: action.payload.holdProperty
        };
        case UPDATE_PLAYER_BALANCE: return {
            ...state,
            players: state.players.map(player => (
                player.id === action.payload.id ? {
                    ...player,
                    balance: action.payload.balance
                } : player
            ))
        };
        case UPDATE_GAMEBOARD_BUILDINGS: return {
            ...state,
            playersBuildings: action.payload.playersBuildings
        };
        default: return state;
    };
};

export default banker;
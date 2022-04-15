import socket from '../helpers/socket.mjs';
import events from '../events.mjs';
import actions from './actions.mjs';
import {
    conditionedPlayers,
    definePlayersPositions
} from '../../lib/Banker/helpers/players.mjs';
import utils from '../../lib/utils/utils.mjs';

const resObj = (actionType, payload) => (
    JSON.stringify({
        type: events.UPDATE,
        action: {
            type: actionType,
            payload: payload
        }
    })
);

const response = (id, actionType, payload) => {
    socket.findClient(id).send(resObj(actionType, payload));
};

const error = (id, message) => {
    response(id, actions.ERROR, {error: message});
};

const disconnect = (banker) => {
    socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
        players: utils.mapToArray(banker.players),
        playersCount: banker.players.size,
        readyCount: conditionedPlayers(banker.players, 'isReady')
    }));
};

const addPlayer = (id, name, banker) => {
    response(id, actions.REGISTER_PLAYER, {
        id: id,
        name: name,
        isLoggedIn: true
    });

    socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
        players: utils.mapToArray(banker.players),
        playersCount: banker.players.size,
        readyCount: conditionedPlayers(banker.players, 'isReady')
    }));
};

const changeStatus = (id, status, value, banker) => {
    response(id, actions.CHANGE_STATUS, {
        status: status,
        value: value
    });
    
    if (status === 'isReady') {
        socket.broadcast(resObj(actions.UPDATE_LOBBY_INFO, {
            players: utils.mapToArray(banker.players),
            playersCount: banker.players.size,
            readyCount: conditionedPlayers(banker.players, 'isReady')
        }));
    }
};

const startGame = (players) => {
    socket.broadcast(resObj(actions.START_GAME, {
        isGameStarted: true,
        playersPositions: definePlayersPositions(players)
    }));
};

const changeBalance = (id, balance) => {
    response(id, actions.CHANGE_BALANCE, {
        balance: balance
    });

    socket.broadcast(resObj(actions.UPDATE_PLAYER_BALANCE, {
        id: id,
        balance: balance
    }));
};

const holdProperty = (id, property) => {
    response(id, actions.HOLD_PROPERTY, {
        holdProperty: property
    });
};

const setInput = (id, inputType, isInput) => {
    response(id, actions.PROMPT_INPUT, {
        type: inputType,
        isInput: isInput
    });
};

const buyProperty = (id, property) => {
    response(id, actions.BUY_PROPERTY, {
        property: property
    })
};

const startAuction = (lot) => {
    socket.broadcast(resObj(actions.SET_UP_AUCTION, {
        lot: lot
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
        freePrisonEscape: freePrisonEscape
    });
};

const log = (log) => {
    socket.broadcast(resObj(actions.ADD_NEW_LOG, {
        log: log
    }));
};

const clearLogger = () => {
    socket.broadcast(resObj(actions.CLEAR_LOGGER));
};

export default {
    disconnect: disconnect,
    error: error,
    addPlayer: addPlayer,
    changeStatus: changeStatus,
    startGame: startGame,
    changeBalance: changeBalance,
    holdProperty: holdProperty,
    setInput: setInput,
    buyProperty: buyProperty,
    startAuction: startAuction,
    applyBid: applyBid,
    useEscapeCard: useEscapeCard,
    log: log,
    clearLogger: clearLogger
};



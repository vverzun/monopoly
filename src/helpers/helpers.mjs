import events from './events.mjs';

const helpers = {
    addPlayer(name, ws) {
        const message = {
            type: events.PLAYER_ADD,
            data: name
        };

        ws.send(JSON.stringify(message));
    },

    changePlayerStatus(ws) {
        const message = {
            type: events.PLAYER_READY
        };
        
        ws.send(JSON.stringify(message));
    },

    passPlayerTurn(ws) {
        const message = {
            type: events.PLAYER_PASS_TURN
        };

        ws.send(JSON.stringify(message));   
    }
};

export default helpers;
import events from './events.mjs';

const helpers = {
    addPlayer(name, ws) {
        const request = {
            type: events.PLAYER_ADD,
            data: name
        };

        ws.send(JSON.stringify(request));
    },

    changePlayerStatus(ws) {
        const request = {
            type: events.PLAYER_READY
        };
        
        ws.send(JSON.stringify(request));
    },

    passPlayerTurn(ws) {
        const request = {
            type: events.PLAYER_PASS_TURN
        };

        ws.send(JSON.stringify(request));   
    }
};

export default helpers;
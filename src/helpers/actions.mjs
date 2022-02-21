import events from './events.mjs';

const actions = {
    addPlayer(name, ws) {
        const request = {
            type: events.PLAYER_ADD,
            name: name
        };

        ws.send(JSON.stringify(request));
    },

    changePlayerStatus(ws) {
        const request = {
            type: events.PLAYER_READY
        };
        
        ws.send(JSON.stringify(request));
    },

    getPlayerDecision(decision, ws) {
        const request = {
            type: events.PLAYER_DECIDE,
            decision: decision
        };

        ws.send(JSON.stringify(request));
    },

    submitPlayerBid(bid, ws) {
        const request = {
            type: events.PLAYER_BID,
            bid: bid
        }; 

        ws.send(JSON.stringify(request));
    },

    playerLeaveAuction(ws) {
        const request = {
            type: events.PLAYER_LEAVE_AUCTION
        }; 

        ws.send(JSON.stringify(request));
    }
};

export default actions;
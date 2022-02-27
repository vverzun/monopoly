import events from './events.mjs'; 
import community_chest_mock from '../lib/mock/community_chest_mock.mjs';
import chance_mock from '../lib/mock/chance_mock.mjs';

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

    sendPlayerDecision(decision, ws) {
        const request = {
            type: events.PLAYER_DECISION_RESULT,
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
    },

    submitDiceRollResult(rollResult, ws) {
        const request = {
            type: events.PLAYER_DICE_ROLL_RESULT,
            rollResult: rollResult
        }; 

        ws.send(JSON.stringify(request));
    },

    submitCardNumber(number, data, ws) {
        let card;
        
        if (data.playerData.isCardNumberNeeded.type === 'chance') {
            card = chance_mock[number];
        } else {
            card = community_chest_mock[number];
        };

        const request = {
            type: events.PLAYER_CARD_NUMBER_RESULT,
            card: card
        };

        ws.send(JSON.stringify(request));
    }
};

export default actions;
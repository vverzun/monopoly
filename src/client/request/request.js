import {ws} from '../components/App/App';
import events from './events';

const request = (type, key, value) => {
    ws.send(JSON.stringify({
        type: type,
        [key]: value
    }))
};

export const newPlayerJoin = (name) => {
    request(events.NEW_PLAYER_JOIN, 'name', name);
};

export const ready = () => {
    request(events.READY);
};

export const boardMove = (cell) => {
    request(events.BOARD_MOVE, 'cell', cell);
};

export const escapePrison = (escapeType) => {
    request(events.ESCAPE_PRISON, 'escapeType', escapeType);
};

export const propertyDecision = (decision) => {
    request(events.INPUT, 'input', {
        type: events.PROPERTY_DECISION,
        decision: decision
    });
};

export const bid = (value) => {
    request(events.INPUT, 'input', {
        type: events.BID,
        bid: value
    });
};

export const diceRoll = (amount) => {
    request(events.INPUT, 'input', {
        type: events.DICE_ROLL,
        diceAmount: amount
    });
};

export const leaveAuction = () => {
    request(events.LEAVE_AUCTION);
};
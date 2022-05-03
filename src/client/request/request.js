import {ws} from '../components/App/App';
import events from './events';

const request = (type, key, value) => {
	ws.send(JSON.stringify({
		type: type,
		[key]: value,
	}));
};

export const newPlayerJoin = (name) => {
	request(events.NEW_PLAYER_JOIN, 'name', name);
};

export const connect = (state) => {
	request(events.CONNECT, 'state', state);	
};

export const ready = () => {
	request(events.READY);
};

export const boardMove = (diceRoll) => {
	request(events.BOARD_MOVE, 'diceRoll', diceRoll);
};

export const escapePrison = (escapeType) => {
	request(events.ESCAPE_PRISON, 'escapeType', escapeType);
};

export const propertyDecision = (decision) => {
	request(events.INPUT, 'input', {
		type: events.PROPERTY_DECISION,
		decision: decision,
	});
};

export const cardDraw = (cardType) => {
	request(events.INPUT, 'input', {
		type: events.CARD_DRAW,
		cardType: cardType,
	});
};

export const bid = (value) => {
	request(events.INPUT, 'input', {
		type: events.BID,
		bid: value,
	});
};

export const leaveAuction = () => {
	request(events.LEAVE_AUCTION);
};

export const buyBuilding = (propertyId, building) => {
	request(events.BUILDING, 'buildingData', {
		propertyId: propertyId,
		building: building,
		action: 'buy',
	});
};

export const sellBuilding = (propertyId, building) => {
	request(events.BUILDING, 'buildingData', {
		propertyId: propertyId,
		building: building,
		action: 'sell',
	});
};

export const mortgage = (propertyId) => {
	console.log('in progress...');
};

export const offerTrade = (tradeData) => {
	request(events.OFFER_TRADE, 'tradeData', tradeData);
};

export const tradeDecision = (decision) => {
	request(events.INPUT, 'input', {
		type: events.TRADE_DECISION,
		decision: decision,
	});
};

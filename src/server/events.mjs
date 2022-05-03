const events = {
	CONNECT: 'connect',
	NEW_PLAYER_JOIN: 'newPlayerJoin',
	READY: 'ready',
	BOARD_MOVE: 'boardMove',
	GO: 'go',
	PROPERTY: 'property',
	TAX: 'tax',
	PRISON: 'prison',
	INPUT: 'input',
	PROPERTY_DECISION: 'propertyDecision',
	OFFER_TRADE: 'offerTrade',
	TRADE_DECISION: 'tradeDecision',
	CARD_DRAW: 'cardDraw',
	BID: 'bid',
	BUILDING: 'building',
	MORTGAGE: 'mortgage',
	LEAVE_AUCTION: 'leaveAuction',
	ESCAPE_PRISON: 'escapePrison',

	UPDATE: 'update',
	ERROR: 'error',
	PING: 'ping',
	PONG: 'pong',

	BANKRUPT: 'bankrupt',
};

export default events;

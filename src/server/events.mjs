export const gameEvents = {
	// ---player lobby actions---//
	NEW_PLAYER_JOIN: 'newPlayerJoin',
	READY: 'ready',
	// ---player turn---//
	PASS_GO: 'passGo',
	PROPERTY: 'property',
	TAX: 'tax',
	DRAW_CARD: 'drawCard',
	PRISON: 'prison',
	// ---player game actions---//
	LEAVE_AUCTION: 'leaveAuction',
	ESCAPE_PRISON: 'leavePrison',
	TRADE: 'trade',
	BUILDING: 'building',
	MORTGAGE: 'mortgage',
	INPUT: 'input',
	BANKRUPT: 'bankrupt',
	// ---sending data to front-end---//
	UPDATE: 'update',
	ERROR: 'error',
	// ---server staying alive---//
	PING: 'ping',
	PONG: 'pong',
};

export const inputEvents = {
	DICE_ROLL: 'diceRoll',
	CARD: 'cardNumber',
	PROPERTY_DECISION: 'propertyDecision',
	BID: 'bid',
};


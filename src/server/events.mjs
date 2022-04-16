const events = {
	NEW_PLAYER_JOIN: 'newPlayerJoin',             
	READY: 'ready',
	BOARD_MOVE: 'boardMove',
	PROPERTY: 'property',                           
	TAX: 'tax',
	PRISON: 'prison',
	INPUT: 'input',
	PROPERTY_DECISION: 'propertyDecision',
	BID: 'bid',
	LEAVE_AUCTION: 'leaveAuction',
	ESCAPE_PRISON: 'escapePrison',
	
	UPDATE: 'update',                             
	ERROR: 'error',                               
	PING: 'ping',                                 
	PONG: 'pong', 
	
	DRAW_CARD: 'drawCard',
	CARD: 'cardNumber',
	TRADE: 'trade', 
	BUILDING: 'building', 
	MORTGAGE: 'mortgage', 
	BANKRUPT: 'bankrupt'
};

export default events;

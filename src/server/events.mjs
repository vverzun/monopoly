const events = {
	NEW_PLAYER_JOIN: 'newPlayerJoin',             
	READY: 'ready',
	BOARD_MOVE: 'boardMove',
	GO: 'go',
	PROPERTY: 'property',                           
	TAX: 'tax',
	PRISON: 'prison',
	INPUT: 'input',
	PROPERTY_DECISION: 'propertyDecision',
	CARD_DRAW: 'cardDraw',
	BID: 'bid',
	LEAVE_AUCTION: 'leaveAuction',
	ESCAPE_PRISON: 'escapePrison',
	
	UPDATE: 'update',                             
	ERROR: 'error',                               
	PING: 'ping',                                 
	PONG: 'pong', 
	
	TRADE: 'trade', 
	BUILDING: 'building', 
	MORTGAGE: 'mortgage', 
	BANKRUPT: 'bankrupt'
};

export default events;

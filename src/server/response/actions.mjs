const actions = {
	// player
	REGISTER_PLAYER: 'registerPlayer',
	CHANGE_BALANCE: 'changeBalance',
	CHANGE_STATUS: 'changeStatus',
	USE_PRISON_ESCAPE_CARD: 'usePrisonEscapeCard',
	PROMPT_INPUT: 'promptInput',
	BUY_PROPERTY: 'buyProperty',
	POP_CARD: 'popCard',
	UPDATE_PROPERTY: 'updateProperty', //
	ERROR: 'error',
	// logger
	ADD_NEW_LOG: 'addNewLog',
	CLEAR_LOGGER: 'clearLogger',
	// banker
	UPDATE_LOBBY_INFO: 'updateLobbyInfo',
	START_GAME: 'startGame',
	HOLD_PROPERTY: 'holdProperty',
	UPDATE_PLAYER_BALANCE: 'updatePlayerBalance',
	MOVE: 'move',
	UPDATE_GAMEBOARD_BUILDINGS: 'updateGameboardBuildings', //
	UPDATE_PLAYERS_PROPERTIES: 'updatePlayersProperties', //
	SHOW_TRADE_OFFER: 'showTradeOffer',
	// auction
	SET_UP_AUCTION: 'setUpAuction',
	APPLY_BID: 'applyBid',
	CHANGE_CONNECTION_STATUS: 'changeConnectionStatus'
};

export default actions;

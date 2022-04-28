import events from '../events.mjs';

const processRequest = (data, banker, ws) => {
	const player = banker.findPlayer(ws.id);

	const request = {
		[events.NEW_PLAYER_JOIN]: () =>
			banker.addPlayer(data.name, ws),

		[events.READY]: () =>
			banker.setPlayerReady(player, 'isReady', true),

		[events.BOARD_MOVE]: () =>
			banker.processBoardMove(player, data.diceRoll),

		[events.LEAVE_AUCTION]: () =>
			banker.processPlayerLeaveAuction(player),

		[events.ESCAPE_PRISON]: () =>
			player.processPrisonEscape(data.escapeType),

		[events.TRADE]: () =>
			banker.processTrade(player, data.tradeData),

		[events.BUILDING]: () =>
			banker.processBuilding(player, data.buildingData),

		[events.MORTGAGE]: () =>
			player.processPropertyMortgage(data.propertyId, data.isMortgaged),

		[events.INPUT]: () =>
			banker.processInput(player, data.input),

		[events.BANKRUPT]: () =>
			banker.processBankrupt(player),

		[events.OFFER_TRADE]: () =>
			banker.offerTrade({...data.tradeData, offerFrom: player.id}),

		[events.PONG]: () => ws.isAlive = true,
	};

	return request[data.type]();
};

export default processRequest;

import {gameEvents as e} from '../events.mjs';

const processRequestData = (data, banker, ws) => {
	const player = banker.findPlayer(ws.id);

	const events = {
		// ----------player lobby actions---------//
		[e.NEW_PLAYER_JOIN]: () =>
			banker.addPlayer(ws, data.name),

		[e.READY]: () =>
			banker.setPlayerReady(player, 'isReady', true),
		// ----------player turn----------//
		[e.PASS_GO]: () =>
			player.changeBalance(200),

		[e.PROPERTY]: () =>
			banker.processProperty(player, data.data),

		[e.TAX]: () =>
			player.changeBalance(-200),

		[e.DRAW_CARD]: () =>
			player.setInput(data.data.type, true),

		[e.PRISON]: () =>
			player.changeStatus('isPrisoner', data.data.isPrisoner),
		// ----------player game actions----------//
		[e.LEAVE_AUCTION]: () =>
			banker.processPlayerLeaveAuction(player),

		[e.ESCAPE_PRISON]: () =>
			player.processPrisonEscape(data.escapeType),

		[e.TRADE]: () =>
			banker.processTrade(player, data.tradeData),

		[e.BUILDING]: () =>
			banker.processBuilding(player, data.buildingData),

		[e.MORTGAGE]: () =>
			player.processPropertyMortgage(data.propertyId, data.isMortgaged),

		[e.INPUT]: () =>
			banker.processInput(player, data.input),

		[e.BANKRUPT]: () =>
			banker.processBankrupt(player),
		// ----------server staying alive----------//
		[e.PONG]: () => ws.isAlive = true,
	};

	return events[data.type]();
};

export default processRequestData;

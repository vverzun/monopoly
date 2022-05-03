import events from '../events.mjs';
import {setGameData} from '../server.mjs';

const processRequest = async (data, banker, ws) => {
	const player = banker.findPlayer(ws.id);

	const request = {
		[events.CONNECT]: () => 
			banker.connectPlayer(data.state, ws),

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

	request[data.type]();
	if (data.type !== events.PONG && data.type !== events.CONNECT) {
		await setGameData('game', JSON.stringify(banker.getData()));
	};
};

export default processRequest;

import gameboard from '../../mock/gameboardMock.mjs';
import events from '../../../server/events.mjs';

const applyBoardMove = (banker, player, diceRoll) => {
	const newPosition = (diceRoll + player.position) % 40;

	const boardMoveEvents = {
		[events.GO]: () =>
			'',
		[events.PROPERTY]: (cellData) =>
			banker.processProperty(player, cellData, diceRoll),
		[events.TAX]: (cellData) =>
			player.changeBalance(cellData.amount),
		[events.CARD_DRAW]: (cellData) =>
			player.setInput(cellData.type),
		[events.PRISON]: (cellData) =>
			player.changeStatus('isPrisoner', cellData.isPrisoner),
	};

	const {type, cellData} = findCell(newPosition);

	return boardMoveEvents[type](cellData);
};

export default applyBoardMove;

const findCell = (cell) => {
	const cellTypeToEvent = {
		'go': events.GO,
		'street': events.PROPERTY,
		'railway': events.PROPERTY,
		'service': events.PROPERTY,
		'tax': events.TAX,
		'communityChest': events.CARD_DRAW,
		'chance': events.CARD_DRAW,
		'prison': events.PRISON,
	};

	return {
		type: cellTypeToEvent[gameboard[cell].type],
		cellData: gameboard[cell],
	};
};

import gameboard from '../../mock/gameboardMock.mjs';
import events from '../../../server/events.mjs';

const applyBoardMove = (banker, player, cell) => {
    console.log(cell);
    const boardMoveEvents = {
        [events.PASS_GO]: (cellData) => 
            player.changeBalance(cellData.amount),
        [events.PROPERTY]: (cellData) =>
            banker.processProperty(player, cellData),
        [events.TAX]: (cellData) => 
            player.changeBalance(cellData.amount),
        [events.DRAW_CARD]: (cellData) =>
            player.setInput(cellData.type, true),
        [events.PRISON]: (cellData) => 
            player.changeStatus('isPrisoner', cellData.isPrisoner)
    };
    
    const {type, cellData} = findCell(cell); 
    return boardMoveEvents[type](cellData);
};

export default applyBoardMove;

const findCell = (cell) => {
	const cellTypeToEvent = {
		'go': events.PASS_GO,
		'street': events.PROPERTY,
		'railway': events.PROPERTY,
		'service': events.PROPERTY,
		'tax': events.TAX,
		'communityChest': events.DRAW_CARD,
		'chance': events.DRAW_CARD,
		'prison': events.PRISON,
	};

	return {
        type: cellTypeToEvent[gameboard[cell].type], 
        cellData: gameboard[cell]
    };
};
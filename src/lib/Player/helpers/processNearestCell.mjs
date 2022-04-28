import {findNearestTargetCell} from '../../Banker/helpers/players.mjs';

const processNearestCell = (card, banker, self) => {
	self.nextRentTimes = card.nextRentTimes;

	if (card.target === 'railway') {
		const diceRoll = findNearestTargetCell(self.position, card.target);
		banker.processBoardMove(self, diceRoll, false);
	} else {
		// response.showCardText();
	};
};

export default processNearestCell;

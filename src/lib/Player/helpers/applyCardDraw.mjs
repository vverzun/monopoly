import {ownPropertyPrice} from '../../Banker/helpers/players.mjs';
import processNearestCell from './processNearestCell.mjs';
import changePlayerBalances from './balance.mjs';
import communityChest from '../../mock/communityChestMock.mjs';
import chance from '../../mock/chanceMock.mjs';

const applyCardDraw = (cardType, banker, self) => {
	const card = drawRandomCard(cardType)
	self.card = card;
	
	const cards = {
		'goTo': () => 
			banker.processBoardMove(self, card.cell - self.position, card.isGoBonus),
		
		'goBack': () => 
			banker.processBoardMove(self, card.cell, false),
		
		'rentMultiplier': () =>
		 	processNearestCell(card, banker, self),

		'balance': () =>
			changePlayerBalances(card, banker.players, self),
	
		'prisonEscape': () =>
			self.changeStatus('freePrisonEscape', self.freePrisonEscape + 1),
		
		'prison': () =>
		 	self.changeStatus('isPrisoner', card.isPrisoner),
		
		'propertyFee': () => {
			const fee = ownPropertyPrice(card, self.property);
			self.changeBalance(-Math.abs(fee));
		},
	};

	cards[card.type]();
};

const drawRandomCard = (cardType) => (
	cardType === 'chance' ?
		chance[Math.floor(16 * Math.random())] :
		communityChest[Math.floor(16 * Math.random())]
);

export default applyCardDraw;

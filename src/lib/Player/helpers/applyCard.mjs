import changePlayerBalances from './balance.mjs';
import {ownPropertyPrice} from '../../Banker/helpers/players.mjs';

const applyCard = (players, card, self) => {
	const cards = {
		'balance': () =>
			changePlayerBalances(players, card, self),
		'prison': () =>
			self.changeStatus('isPrisoner', card.isPrisoner),
		'prisonEscape': () =>
			self.changeStatus('freePrisonEscape', self.freePrisonEscape + 1),
		'rentMultiplier': () =>
			self.changeStatus('nextRentTimes', card.nextRentTimes),
		'propertyFee': () => {
			const fee = ownPropertyPrice(card, self.playerData.property);
			self.changeBalance(-Math.abs(fee));
		},
		'goTo': () => console.log('feature is in progress...'),
	};

	return cards[card.type]();
};

export default applyCard;

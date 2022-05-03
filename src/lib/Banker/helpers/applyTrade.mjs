// import validateTrade from '../../error/validateTrade.mjs';
import gameboard from '../../../lib/mock/gameboardMock.mjs';

const applyTrade = (partner, banker) => {
	const offer = {...partner.tradeOffer};
	offer.player.items = itemsToProperty(offer.player.items);
	offer.partner.items = itemsToProperty(offer.partner.items);

	const player = banker.findPlayer(offer.offerFrom);

	imitateTrade(offer, 'player', 'partner', player, partner);
	imitateTrade(offer, 'partner', 'player', partner, player);
};

const itemsToProperty = (items) => (
	Object.entries(items).map((item) => (
		gameboard.find((cell) => cell.title === item[0])
	))
);

const imitateTrade = (offer, from, to, player, partner) => {
	offer[from].items.forEach((item) => player.property.delete(item.id));
	offer[to].items.forEach((item) => player.property.set(item.id, item));

	if (offer[to].money) {
		partner.changeBalance(-Math.abs(offer[to].money));
		player.changeBalance(offer[to].money);
		// bankrupt issue
	};
};

export default applyTrade;

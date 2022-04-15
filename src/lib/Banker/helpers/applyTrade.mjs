import validateTrade from '../../error/validateTrade.mjs';

const applyTrade = (player, newOwner, tradeData) => {
	validateTrade(player, tradeData);

	if (tradeData.item === 'prisonEscape') {
		tradePrisonEscape(player, newOwner, tradeData);
	} else {
		tradeProperty(player, newOwner, tradeData);
	}

	if (!newOwner.payment.isBankrupt) player.changeBalance(tradeData.amount);
};

const tradePrisonEscape = (player, newOwner, {amount}) => {
	player.freePrisonEscape -= 1;
	newOwner.freePrisonEscape += 1;
	newOwner.changeBalance(-Math.abs(amount), player);
};

const tradeProperty = (player, newOwner, {propertyId, amount}) => {
	newOwner.buyProperty(player.property.get(propertyId), amount, player);
	player.property.delete(propertyId);
};

export default applyTrade;

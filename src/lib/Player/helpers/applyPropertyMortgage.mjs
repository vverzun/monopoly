import utils from '../../utils/utils.mjs';

const applyPropertyMortgage = (propertyId, isMortgaged, player) => {
	player.property.get(propertyId).isMortgaged = isMortgaged;

	const amount = player.property.get(propertyId).mortgage;

	isMortgaged ?
		player.changeBalance(amount) :
		player.changeBalance(utils.amountPlusTenPercents(amount));
};

export default applyPropertyMortgage;

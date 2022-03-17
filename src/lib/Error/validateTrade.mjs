import {isColorGroupHasNoBuildings} from '../Player/helpers/colorGroup.mjs';

const validateTrade = (player, tradeData) => {
	if (tradeData.item === 'property') {
		validatePropertyTrade(tradeData.propertyId, player.property);
	} else {
		validatePrisonEscapeTrade(player);
	}
};

const validatePropertyTrade = (propertyId, property) => {
	if (!isColorGroupHasNoBuildings(propertyId, property)) {
		throw new Error('Sell buildings from color group before trading!');
	}
};

const validatePrisonEscapeTrade = (player) => {
	if (!player.freePrisonEscape) {
		throw new Error('You have no \'Free prison escape\' cards to trade!');
	}
};

export default validateTrade;

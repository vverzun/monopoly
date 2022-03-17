import {inputEvents} from '../../../server/events.mjs';
import {countPlayerPropertyType} from '../../Banker/helpers/players.mjs';
import {isColorGroupComplete} from './colorGroup.mjs';

const processRentAmount = (property, owner, diceAmount, player) => {
	if (owner.property.get(property.id).isMortgaged) {
		player.logger.log(`${property.title} is mortgaged, the rent is free!`);
	} else if (property.type === 'service' && !diceAmount) {
		player.setInput(inputEvents.DICE_ROLL, true);
	} else {
		let amount = calculateRent(property, owner.property, diceAmount);

		if (player.nextRentTimes) {
			amount *= player.nextRentTimes;
			player.changeStatus('nextRentTimes', 0);
		};

		player.changeBalance(-Math.abs(amount), owner);
		if (!player.payment.isBankrupt) {
			owner.changeBalance(amount);
		};
	}
};

const calculateRent = (property, ownerProperty, diceAmount) => {
	switch (property.type) {
	case 'railway': return calculateRailwayRent(property.id, ownerProperty);
	case 'street': return calculateStreetRent(property.id, ownerProperty);
	case 'service': return calculateServiceRent(diceAmount, ownerProperty);
	default: console.log('Unknown property type');
	};
};

const calculateRailwayRent = (id, property) => (
	property.get(id).rent[countPlayerPropertyType('railway', property) - 1]
);

const calculateStreetRent = (id, property) => {
	let amount = 0;

	if (property.get(id).houses) {
		amount += property.get(id).houseRent[property.get(id).houses - 1];
	}
	if (property.get(id).hotels) {
		amount += property.get(id).hotelRent;
	}

	if (!amount) amount = property.get(id).rent;

	return isColorGroupComplete(id, property) ? amount * 2 : amount;
};

const calculateServiceRent = (diceAmount, property) => {
	if (countPlayerPropertyType('service', property) === 2) {
		return diceAmount * 10;
	} else {
		return diceAmount * 4;
	};
};

export default processRentAmount;

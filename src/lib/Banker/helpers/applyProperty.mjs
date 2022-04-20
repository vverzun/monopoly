import {hasPropertyOwner} from './players.mjs';
import response from '../../../server/response/response.mjs';

const applyProperty = (player, property, diceAmount, banker) => {
	const [isAvailable, owner] = hasPropertyOwner(banker.players, property.id);
	
	if (isAvailable) {
		banker.holdProperty = property;
		response.holdProperty(player.id, property);
		player.setInput('propertyDecision');
	} else {
		player.payRent(property, owner, diceAmount);
	}
};

export default applyProperty;

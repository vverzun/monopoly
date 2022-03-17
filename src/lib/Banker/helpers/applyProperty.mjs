import {hasPropertyOwner} from './players.mjs';

const applyProperty = (player, property, banker) => {
	const [isAvailable, owner] = hasPropertyOwner(banker.players, property.id);

	if (isAvailable) {
		player.setInput('propertyDecision', true);
		banker.holdProperty = property;
	} else {
		banker.holdOwner = owner;
		player.payRent(property, owner);
	}
};

export default applyProperty;

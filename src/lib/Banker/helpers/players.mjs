import utils from '../../utils/utils.mjs';
import gameboard from '../../mock/gameboardMock.mjs';

export const isPlayerHasAnyBuildings = (player) => (
	utils.mapToArray(player.property).every((property) => (
		!property.houses && !property.hotels),
	)
);

export const conditionedPlayers = (players, condition) => (
	utils.mapToArray(players).reduce((conditionPlayers, player) => (
		player[condition] ? conditionPlayers + 1 : conditionPlayers
	), 0)
);

export const definePlayersPositions = (players) => (
	utils.mapToArray(players).map((player) => ({
		id: player.id,
		name: player.name,
		position: player.position,
	}))
);

export const definePlayersBuildings = (players) => {
	const playersBuildings = [];

	const setBuilding = (buildingType, property) => (
		playersBuildings.push({
			index: gameboard.findIndex((cell) => cell.id === property.id),
			building: buildingType,
			amount: property[buildingType],
		})
	);

	utils.mapToArray(players).forEach((player) => {
		utils.mapToArray(player.property).forEach((property) => {
			if (property.house) {
				setBuilding('house', property);
			} else if (property.hotel) {
				setBuilding('hotel', property);
			}
		});
	});

	return playersBuildings;
};

export const definePlayersProperties = (players) => {
	const playersProperties = [];

	utils.mapToArray(players).forEach((player) => {
		utils.mapToArray(player.property).forEach((property) => {
			playersProperties.push({...property, owner: player.id});
		});
	});

	return playersProperties;
};

export const hasPropertyOwner = (players, propertyId) => {
	for (const [, player] of players) {
		if (player.property.has(propertyId)) return [false, player];
	};

	return [true, null];
};

export const addMembersToAuction = (banker) => {
	banker.players.forEach((player) => {
		player.changeStatus('isAuction', true);
	});
};

export const assignPropertyNewOwner = (player) => {
	for (const [key, value] of player.property) {
		player.lastPayedTo.property.set(key, value);
	};
};

export const countPlayerPropertyType = (type, property) => (
	utils.mapToArray(property).reduce((withType, property) => (
		property.type === type ? withType + 1 : withType
	), 0)
);

export const ownPropertyPrice = (card, property) => (
	utils.mapToArray(property).reduce((amount, property) => {
		if (property.houses) amount += (property.houses * card.pricePerHouse);
		if (property.hotels) amount += (property.hotels * card.pricePerHotel);
		return amount;
	}, 0)
);

export const findNearestTargetCell = (position, target) => {
	let targetPosition = position;

	while (gameboard[targetPosition].type !== target) {
		targetPosition = (targetPosition + 1) % 40;
	};

	return targetPosition;
};



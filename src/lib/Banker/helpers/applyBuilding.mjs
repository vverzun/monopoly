import validateBuilding from '../../error/validateBuilding.mjs';

const applyBuilding = (player, buildingData, capacity, players) => {
	validateBuilding(buildingData, player.property, capacity);

	if (buildingData.action === 'buy') {
		player.buyBuilding(buildingData, players);
		capacity[buildingData.building] -= 1;
	} else {
		player.sellBuilding(buildingData, players);
		capacity[buildingData.building] += 1;
		if (buildingData.building === 'hotel') capacity.house -= 4;
	}
};

export default applyBuilding;

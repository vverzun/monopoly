import validateBuilding from '../../error/validateBuilding.mjs';

const applyBuilding = (player, buildingData, capacity) => {
	validateBuilding(buildingData, player.property, capacity);

	if (buildingData.action === 'buy') {
		player.buyBuilding(buildingData);
		capacity[buildingData.building] -= 1;
	} else {
		player.sellBuilding(buildingData);
		capacity[buildingData.building] += 1;
		if (buildingData.building === 'hotel') capacity.house -= 4;
	}
};

export default applyBuilding;

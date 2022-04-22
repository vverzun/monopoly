import {
	isColorGroupComplete,
	isColorGroupHasNoMortgaged,
	isEquallyDistributed,
} from '../Player/helpers/colorGroup.mjs';

const validateBuilding = (buildingData, property, capacity) => {
	if (buildingData.action === 'buy') {
		validateBuildingBuying(buildingData, property, capacity);
	} else {
		validateBuildingSelling(buildingData, property, capacity);
	}
};

const validateBuildingBuying = (buildingData, property, capacity) => {
	const {building, propertyId, action} = buildingData;
	
	if (!isColorGroupComplete(propertyId, property)) {
		throw new Error('You can\'t buy buildings until color group is complete!');
	}

	if (!isColorGroupHasNoMortgaged(propertyId, property)) {
		throw new Error('You can\'t build. Unmortgage property first.');
	}

	if (capacity[building] === 0) {
		throw new Error(`Banker don\'t have any ${building}s left.`);
	}

	if (building === 'hotel' && property.get(propertyId).hotel === 1) {
		throw new Error('Max amount of hotels!');
	}

	if (building === 'house' && property.get(propertyId).house === 4) {
		throw new Error('Max amount of houses!');
	}

	if (!isEquallyDistributed(propertyId, action, property)) {
		throw new Error('Distribute buildings equally among color group!');
	}
};

const validateBuildingSelling = (buildingData, property, capacity) => {
	const {building, propertyId, action} = buildingData;

	if (property.get(propertyId)[building] === 0) {
		throw new Error(`Minimum amount of ${building}s`);
	}

	if (building === 'hotel' && capacity.house < 4) {
		throw new Error(`Banker don\'t have enough houses to replace hotel!`);
	}

	if (!isEquallyDistributed(propertyId, action, property)) {
		throw new Error('Sell buildings equally in the color group!');
	}
};

export default validateBuilding;

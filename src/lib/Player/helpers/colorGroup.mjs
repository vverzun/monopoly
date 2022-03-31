import utils from '../../utils/utils.mjs';

export const isColorGroupComplete = (id, property) => (
	property.get(id).group.every((id) => property.has(id))
);

export const isColorGroupHasNoMortgaged = (propertyId, property) => (
	property.get(propertyId).group.every((id) => (!property.get(id).isMortgaged))
);

export const isColorGroupHasNoBuildings = (propertyId, property) => (
	property.get(propertyId).group.every((id) =>
		(!property.get(id).house && !property.get(id).hotel))
);

export const isEquallyDistributed = (propertyId, action, property) => (
	utils.arrayWithoutItem(propertyId, property.get(propertyId).group).every((id) => {
		if (action === 'buy') {
			return property.get(propertyId).house - property.get(id).house <= 0;
		};

		return property.get(propertyId).house - property.get(id).house >= 0;
	})
);

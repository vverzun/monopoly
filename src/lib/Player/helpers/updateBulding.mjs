const updateBuilding = (building, property, action) => {
	const update = {
		'buyhouse': () => buyHouse(property),
		'buyhotel': () => buyHotel(property),
		'sellhouse': () => sellHouse(property),
		'sellhotel': () => sellHotel(property),
	};

	return update[action + building]();
};

const buyHouse = (property) => property.house += 1;
const buyHotel = (property) => {
	property.house -= 4;
	property.hotel += 1;
};

const sellHouse = (property) => property.house -= 1;
const sellHotel = (property) => {
	property.house += 4;
	property.hotel -= 1;
};

export default updateBuilding;

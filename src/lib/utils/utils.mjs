const mapToArray = (map) => Array.from(map.values());

const arrayWithoutItem = (id, items) => {
	if (!Array.isArray(items)) items = mapToArray(items);

	return items.filter((item) => item.id !== id);
};

const currentTime = () => {
	const dateOptions = {
		hour12: false,
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	return new Date().toLocaleTimeString([], dateOptions);
};

const amountPlusTenPercents = (amount) => (
	-Math.abs(amount + ((amount * 10) / 100))
);

export default {
	mapToArray: mapToArray,
	arrayWithoutItem: arrayWithoutItem,
	currentTime: currentTime,
	amountPlusTenPercents: amountPlusTenPercents,
};


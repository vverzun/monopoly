const serializeCurrentGameData = (banker) => {
	const gameData = {
		isGameStarted: banker.isGameStarted,
		holdProperty: banker.holdProperty,
		auction: {
			auctionData: banker.auction.auctionData,
		},
		capacity: {
			house: banker.capacity.house,
			hotel: banker.capacity.hotel,
		},
	};

	gameData.players = Array.from(banker.players.values()).map((player) => ({
		...player,
		property: Array.from(player.property.values()),
	}));

	return gameData;
};

export default serializeCurrentGameData;

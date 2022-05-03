const serializeCurrentGameData = (banker) => {
    const serializedData = {
        isGameStarted: banker.isGameStarted,
        holdProperty: banker.holdProperty,
        //auction issue
        auction: {
			auctionData: banker.auction.auctionData,
		},
		capacity: {
			house: banker.capacity.house,
			hotel: banker.capacity.hotel,
		}
    };
    //serializedData.clients = Array.from(banker.clients.keys());
    serializedData.players = Array.from(banker.players.values()).map(player => ({
        ...player,
        property: Array.from(player.property.values())
    }));
    console.log(serializedData);
    return serializedData;
};

export default serializeCurrentGameData;
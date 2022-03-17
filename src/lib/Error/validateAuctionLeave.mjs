const validateAuctionLeave = (playerId, winner, members) => {
	if (playerId === winner) {
		throw new Error('You are the winner, you can\'t leave auction!');
	}

	if (!members.get(winner)) {
		throw new Error('You can\'t leave because the winner is not defined!');
	}
};

export default validateAuctionLeave;

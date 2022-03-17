export const validateAuctionBid = (bid, highestBid) => {
	if (bid <= highestBid) {
		throw new Error('Auction bid must be bigger than current highest bid!');
	}

	if (!/^[0-9]+$/.test(bid)) {
		throw new Error('Enter numeric characters only! (Allowed input:0-9).');
	}
};

export const validateDiceRoll = (diceAmount) => {
	if (!/^[0-9]+$/.test(bid)) {
		throw new Error('Enter numeric characters only! (Allowed input:0-9).');
	}

	if (diceAmount < 2 || diceAmount > 12) {
		throw new Error('The dice amount is out of range: min 2, max 12');
	}
};

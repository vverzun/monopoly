export const validateAuctionBid = (bid, highestBid) => {
	if (parseInt(bid) <= parseInt(highestBid)) {
		console.log('true');
		throw new Error('Auction bid must be bigger than current highest bid!');
	}

	if (!/^[0-9]+$/.test(bid)) {
		throw new Error('Enter numeric characters only! (Allowed input:0-9).');
	}
};

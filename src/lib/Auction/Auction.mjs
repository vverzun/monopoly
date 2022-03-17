class Auction {
	constructor(players, lot, property, logger) {
		this.members = players;
		this.lot = lot;
		this.highestBid = '0';
		this.winner = '';
		this.propertyQueue = property;
		this.logger = logger;
	};

	static create(players, property, logger) {
		logger.log('Auction started.');
		return new Auction(players, property.shift(), property, logger);
	};

	get auctionData() {
		const player = this.members.get(this.winner);

		return {
			lot: this.lot,
			highestBid: this.highestBid,
			winner: player ? player : {},
		};
	};

	applyBid(playerId, bid) {
		this.highestBid = bid;
		this.winner = playerId;
	};

	excludeMember(player) {
		player.changeStatus('isAuction', false);
		this.logger.log(`${player.name} left auction. Left: ${this.members.size}`);
	};

	end(winner, banker) {
		winner.buyProperty(this.lot, this.highestBid);
		winner.changeStatus('isAuction', false);
		this.logger.log(`Auction ended. The winner is ${winner.name}!`);

		if (this.propertyQueue.length) {
			banker.startAuction(this.propertyQueue);
		}
	};
};

export default Auction;

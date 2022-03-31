import response from '../../server/response/response.mjs';

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
		const lot = property.shift();
		logger.log('Auction started.');
		response.startAuction(lot);
		return new Auction(players, lot, property, logger);
	};

	applyBid(player, bid) {
		this.highestBid = bid;
		this.winner = player;
		response.applyBid(player, bid);
	};

	excludeMember(player) {
		player.changeStatus('isAuction', false);
		this.logger.log(`${player.name} left auction.`);
	};

	end(banker) {
		this.winner.buyProperty(this.lot, this.highestBid);
		this.winner.changeStatus('isAuction', false);
		this.logger.log(`Auction ended. The winner is ${this.winner.name}!`);

		if (this.propertyQueue.length) {
			banker.startAuction(this.propertyQueue);
		}
	};
};

export default Auction;

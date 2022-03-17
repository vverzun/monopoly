import utils from '../../utils/utils.mjs';
import {conditionedPlayers} from './players.mjs';
import validateAuctionLeave from '../../Error/validateAuctionLeave.mjs';

const applyAuctionLeave = (player, players, banker, auction) => {
	validateAuctionLeave(player.id, auction.winner, auction.members);

	auction.excludeMember(player);

	if (conditionedPlayers(utils.mapToArray(players), 'isAuction') === 1) {
		auction.end(banker.findPlayer(auction.winner), banker);
	};
};

export default applyAuctionLeave;

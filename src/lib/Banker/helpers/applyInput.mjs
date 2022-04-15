import events from '../../../server/events.mjs';
import {validateDiceRoll, validateAuctionBid} from '../../error/input.mjs';

const applyInput = (player, input, banker) => {
	const inputs = {
		[events.DICE_ROLL]: () => {
			validateDiceRoll(input.diceAmount);
			player.payRent(banker, banker.holdProperty, banker.holdOwner, input.diceAmount);
		},

		[events.CARD]: () =>
			player.processCard(banker.players, input.card),

		[events.PROPERTY_DECISION]: () =>
			player.processPropertyDecision(input.decision, banker),

		[events.BID]: () => {
			validateAuctionBid(input.bid, banker.auction.highestBid);
			banker.auction.applyBid(player, input.bid);
		},
	};

	player.setInput('', false);

	return inputs[input.type]();
};

export default applyInput;

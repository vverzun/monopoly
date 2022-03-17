import {inputEvents as e} from '../../../server/events.mjs';
import {validateDiceRoll, validateAuctionBid} from '../../Error/input.mjs';

const applyInput = (player, input, banker) => {
	const inputs = {
		[e.DICE_ROLL]: () => {
			validateDiceRoll(input.diceAmount);
			player.payRent(banker.holdProperty, banker.holdOwner, input.diceAmount);
		},

		[e.CARD]: () =>
			player.processCard(banker.players, input.card),

		[e.PROPERTY_DECISION]: () =>
			player.processPropertyDecision(input.decision, banker),

		[e.BID]: () => {
			validateAuctionBid(input.bid, banker.auction.highestBid);
			banker.auction.applyBid(player.id, input.bid);
		},
	};

	player.setInput('', false);

	return inputs[input.type]();
};

export default applyInput;

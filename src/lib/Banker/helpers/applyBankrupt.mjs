import utils from '../../utils/utils.mjs';
import {assignPropertyNewOwner} from './players.mjs';
import {validateBankrupt} from '../../Error/bankrupt.mjs';

const applyBankrupt = (player, banker) => {
	validateBankrupt(player);

	if (player.lastPayedTo === 'bank') {
		banker.startAuction(utils.mapToArray(player.property));
	} else assignPropertyNewOwner(player);

	banker.removePlayer(player.id);
};

export default applyBankrupt;

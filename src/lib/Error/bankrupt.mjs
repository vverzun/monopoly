import {isPlayerHasAnyBuildings} from '../Banker/helpers/players.mjs';

export const validateBankrupt = (player) => {
	if (!isPlayerHasAnyBuildings(player)) {
		throw new Error('You can\'t have buildings before becoming the bankrupt');
	}
};

export const validateBankruptBalance = (amount, player) => {
	if (player.payment.isBankrupt && amount < 0) {
		throw new Error('You can\'t spend money because you are a bankrupt!');
	}
};

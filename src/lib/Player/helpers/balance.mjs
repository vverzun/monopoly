import utils from '../../utils/utils.mjs';

const changePlayerBalances = (card, players, self) => {
	if (card.toEach || card.fromEach) {
		calculateBalances(players, card, self);
	} else self.changeBalance(card.amount);
};

const calculateBalances = (players, card, self) => {
	utils.arrayWithoutItem(self.id, players).forEach((player) => {
		if (card.fromEach) receivePayment(player, card, self);
		else payPlayer(player, card, self);
	});
};

const payPlayer = (player, card, self) => {
	self.changeBalance(-Math.abs(card.amount), player.id);
	player.changeBalance(card.amount, player.lastPayedTo);
};

const receivePayment = (player, card, self) => {
	self.changeBalance(card.amount, self.lastPayedTo);
	player.changeBalance(-Math.abs(card.amount), self.id);
};

export default changePlayerBalances;

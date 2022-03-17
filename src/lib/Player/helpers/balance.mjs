import utils from '../../utils/utils.mjs';

const changePlayerBalances = (players, card, self) => {
	if (card.toEach || card.fromEach) {
		calculateBalances(players, card, self);
	} else self.changeBalance(card.price);
};

const calculateBalances = (players, card, self) => {
	utils.arrayWithoutItem(self.id, players).forEach((player) => {
		if (card.fromEach) receivePayment(player, card, self);
		else payPlayer(player, card, self);
	});
};

const payPlayer = (player, card, self) => {
	self.changeBalance(-Math.abs(card.price), player.id);
	player.changeBalance(card.price, player.lastPayedTo);
};

const receivePayment = (player, card, self) => {
	self.changeBalance(card.price, self.lastPayedTo);
	player.changeBalance(-Math.abs(card.price), self.id);
};

export default changePlayerBalances;

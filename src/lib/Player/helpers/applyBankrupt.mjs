const applyBankrupt = (amount, payTo, player) => {
	switch (true) {
	case amount < 0: memoPaymentToPlayer(player, payTo); break;

	case !player.payment.isBankrupt && player.balance < 0:
		setPlayerBankrupt(player); break;

	case player.payment.isBankrupt: {
		if (amount >= debt) coverFullDebt(player);
		else coverSomeDebt(player);
	}; break;
	};
};

const memoPaymentToPlayer = (player, payTo) => player.lastPayedTo = payTo;

const setPlayerBankrupt = (player) => {
	player.payment.isBankrupt = true;
	player.payment.owesTo = payTo;
	player.payment.debt = Math.abs(player.balance);
};

const coverFullDebt = (player) => {
	player.payment.owesTo.changeBalance(debt);
	player.payment.isBankrupt = false;
};

const coverSomeDebt = (player) => {
	player.payment.owesTo.changeBalance(amount);
	player.payment.debt -= amount;
};

export default applyBankrupt;

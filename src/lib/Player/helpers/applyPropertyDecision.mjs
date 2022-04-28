const applyPropertyDecision = (decision, player, banker) => {
	if (decision === 'buy') {
		player.changeStatus('nextRentTimes', 0);
		player.buyProperty(banker.holdProperty, banker.holdProperty.price, banker.players);
	} else {
		banker.startAuction([banker.holdProperty]);
	};
};

export default applyPropertyDecision;

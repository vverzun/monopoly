const applyPrisonEscape = (escapeType, player) => {
	if (escapeType === 'price') {
		player.changeBalance(-50);
	}
	player.changeStatus('isPrisoner', false);
};

export default applyPrisonEscape;

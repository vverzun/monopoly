import response from '../../../server/response/response.mjs';

const applyPrisonEscape = (escapeType, player) => {
	if (escapeType === 'price') {
		player.changeBalance(-50);
	} else {
		player.freePrisonEscape -= 1;
		response.useEscapeCard(player.id, player.freePrisonEscape);
	}

	player.changeStatus('isPrisoner', false);
};

export default applyPrisonEscape;

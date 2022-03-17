const validateLogIn = (playersCount, isGameStarted) => {
	if (playersCount > 5) {
		throw new Error('The game has a maximum amount of players!');
	}
	if (isGameStarted) {
		throw new Error('The game has already started!');
	}
};

export default validateLogIn;



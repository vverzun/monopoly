const validateLogIn = (name, playersCount, isGameStarted) => {
	if (name.trim() === '')
		throw new Error('Name is empty');
	if (playersCount > 5) {
		throw new Error('The game has a maximum amount of players!');
	}
	if (isGameStarted) {
		throw new Error('The game has already started!');
	}
};

export default validateLogIn;



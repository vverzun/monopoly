import Player from '../../Player/Player.mjs';

const restorePlayerInstances = (banker, gameData) => {
    banker.players = new Map(gameData.players.map(player => 
        [player.id, Player.create(player.id, player.name, banker.logger)]
    ));

    banker.players.forEach(player => player.retrieveData(gameData.players.find(oldPlayer => oldPlayer.id === player.id)));
};

export default restorePlayerInstances;
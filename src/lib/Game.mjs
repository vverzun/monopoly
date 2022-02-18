import Player from './Player.mjs';

class Game {
    constructor() {
        this.clients = new Map();
        this.players = new Map();
        this.isGameStarted = false;
    };

    static create() {
        return new Game();
    };

    set status(started) {
        this.isGameStarted = started;
    };

    get status() {
        return this.isGameStarted;
    };
    
    addNewPlayer(socket, data) {
        this.clients.set(socket.id, socket);
        this.players.set(socket.id, Player.create(socket.id, data));
    };

    removePlayer(id) {
        this.clients.delete(id);
        this.players.delete(id);
    };

    updatePlayerData(id, data) {
        const player = this.findPlayer(id);
        player.update = data;
    };

    findPlayer(id) {
        const player = this.players.get(id);
        return player;  
    };

    countReadyPlayers() {
        let count = 0;
        this.players.forEach(player => {
            if (player.info.isReady) count++;
        });
        return count;
    };

    get playersSize() {
        return this.players.size;
    };
};

export default Game;
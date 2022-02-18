import Player from './Player.mjs';

class Game {
    constructor() {
        this.clients = new Map();
        this.players = new Map();

        this.playersCount = 0;
        this.readyPlayers = 0;
        this.isGameStarted = false;
        this.turnPlayerName = '';
        this.turn = 0;
    };

    static create() {
        return new Game();
    };

    get gameData() {
        return {
            playersCount: this.playersCount,
            readyPlayers: this.readyPlayers,
            isGameStarted: this.isGameStarted,
            turnPlayerName: this.turnPlayerName,
            turn: this.turn 
        };
    };

    addPlayer(ws, name) {
        this.clients.set(ws.id, ws);
        this.players.set(ws.id, Player.create(ws.id, name));

        this.update();
    };

    find(source, id) {
        return this[source].get(id);
    };

    togglePlayerStatus(id) {
        this.find('players', id).toggleReadyStatus();

        this.update();
    };

    passPlayerTurn() {
        this.players.forEach(player => {
            player.changeTurnStatus(false);
        });

        const pos = this.turn % this.clients.size;
        this.turn += 1;
        const id = Array.from(this.clients.keys())[pos];
        
        const client = this.find('clients', id);
        const player = this.find('players', id);
        this.turnPlayerName = player.playerData.playerName;
        player.changeTurnStatus(true);

        return client; // send here isPlayerTurn = true new player obj
    }

    removePlayer(id) {
        this.clients.delete(id);
        this.players.delete(id);

        this.update();
    };

    countReadyPlayers() {
        let count = 0;
        this.players.forEach(player => {
            if (player.isReady) count++;
        });

        return count;
    };

    update() {
        this.playersCount = this.players.size;
        this.readyPlayers = this.countReadyPlayers();

        if (this.playersCount === this.readyPlayers) { 
            this.isGameStarted = true;
            this.passPlayerTurn();
        }
    };
};

export default Game;
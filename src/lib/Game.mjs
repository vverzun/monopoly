import Player from './Player.mjs';

class Game {
    constructor() {
        this.clients = new Map();
        this.players = new Map();
    }

    static create() {
        return new Game();
    }
    
    createNewPlayer(socket, name) {
        this.clients.set(socket.id, socket);
        this.players.set(socket.id, Player.create(socket.id, name));
        console.log('Player is created');
        console.log(this.players.size);
    }
}

export default Game;
import Player from './Player.mjs';
import Auction from './Auction.mjs';

class Game {
    constructor() {
        this.clients = new Map();          
        this.players = new Map();
        this.isGameStarted = false;
        this.playersCount = 0;             
        this.readyPlayers = 0;             
        this.decisionProperty = {};
        this.auction = {};
    };

    static create() {
        return new Game();
    };

    get gameData() {
        return {
            players: Array.from(this.players.values()),

            isGameStarted: this.isGameStarted,
            
            playersCount: this.playersCount,
            readyPlayers: this.readyPlayers,
        
            decisionProperty: this.decisionProperty,
            auctionData: this.auction.auctionData
        };
    };

    addPlayer(ws, name) {
        this.clients.set(ws.id, ws);
        this.players.set(ws.id, Player.create(ws.id, name));

        this.update();
    };

    removePlayer(id) {
        this.clients.delete(id);
        this.players.delete(id);

        this.update();
    };

    findPlayer(id) {
        const user = this.players.get(id); 
        if (user) return user;

        return {};
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

        if (this.playersCount !== 0 && this.playersCount === this.readyPlayers) { 
            this.isGameStarted = true;
        };
    };

    holdDecisionProperty(property) {
        this.decisionProperty = property;
    };

    isPropertyAvailable(id) {
        for (const [playerId, player] of this.players) {
            if (player.property.has(id)) {
                return [false, player];
            };
        };

        return [true, null];
    };

    startAuction() {
        this.auction = Auction.create(this.players, this.decisionProperty);
    };
};

export default Game;
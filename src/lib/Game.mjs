import Player from './Player.mjs';
import Auction from './Auction.mjs';
import uuid from 'uuid';

class Game {
    constructor() {         
        this.players = new Map();
        this.isGameStarted = false;
        this.playersCount = 0;             
        this.readyPlayers = 0;             
        this.decisionProperty = {};
        this.auction = {};

        this.gameLog = [];
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
            auctionData: this.auction.auctionData,

            gameLog: this.gameLog.slice(-20)
        };
    };

    toggleStatus(status) {
        this[status] = !this[status];
        this.gameLog = [];
    };

    addPlayer(ws, name) {
        this.players.set(ws.id, Player.create(ws.id, name));

        this.update();
    };

    removePlayer(id) {
        this.players.delete(id);

        this.update();
    };

    update() {
        this.playersCount = this.players.size;
        this.readyPlayers = this.countReadyPlayers();
    };

    findPlayer(id) {
        const user = this.players.get(id); 
        if (user) return user;

        return {};
    };

    isPropertyAvailable(id) {
        for (const [playerId, player] of this.players) {
            if (player.property.has(id)) {
                return [false, player];
            };
        };

        return [true, null];
    };

    holdDecisionProperty(property) {
        this.decisionProperty = property;
    };

    startAuction() {
        this.auction = Auction.create(this.players, this.decisionProperty);
    };

    createLog(text) {
        const dateOptions = {
            hour12: false, 
            hour: 'numeric', 
            minute: 'numeric'
        };
        const date = new Date().toLocaleTimeString([], dateOptions);
        const log = {
            id: uuid.v4(),
            text: `${date} - ${text}`
        };

        this.gameLog.push(log);
    };

    countReadyPlayers() {
        let count = 0;
        this.players.forEach(player => {
            if (player.isReady) count++;
        });

        return count;
    };
};

export default Game;
class Player {
    constructor(id, playerName) {
        this.id = id;
        this.playerName = playerName;
        this.isLoggedIn = true;
        this.isReady = false;
        this.isPlayerTurn = false;
    };

    static create(id, playerName) {
        return new Player(id, playerName);
    };

    get playerData() {
        return {
            playerName: this.playerName,
            isLoggedIn: this.isLoggedIn,
            isReady: this.isReady,
            isPlayerTurn: this.isPlayerTurn
        };
    };

    changeTurnStatus(status) {
        this.isPlayerTurn = status;
    };

    toggleReadyStatus() {
        this.isReady = !this.isReady;
    };
};

export default Player;
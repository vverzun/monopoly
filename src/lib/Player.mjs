class Player {
    constructor(id, playerName) {
        this.id = id;
        this.playerName = playerName;
        this.isLoggedIn = true;
        this.isReady = false;
        this.isDecide = false;
        this.isAuctionMember = false;
        this.balance = 1500;
        this.property = new Map();
    };

    static create(id, playerName) {
        return new Player(id, playerName);
    };

    get playerData() {
        return {
            playerName: this.playerName,
            
            isLoggedIn: this.isLoggedIn,
            isReady: this.isReady,
            isDecide: this.isDecide,
            isAuctionMember: this.isAuctionMember,

            balance: this.balance,
            property: Array.from(this.property.values())
        };
    };

    toggleStatus(status) {
        this[status] = !this[status];
    };

    payRent(rentPrice, player) {
        player.balance += rentPrice;
        this.balance -= rentPrice;
    };

    buyProperty(property) {
        this.property.set(property.id, property);
        this.balance -= property.price;
    };
};

export default Player;
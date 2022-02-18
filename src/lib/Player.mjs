class Player {
    constructor(id, data) {
        this.id = id;
        this.playerData = data;
    };

    static create(id, data) {
        return new Player(id, data);
    };

    set update(data) {
        this.playerData = data;
    };

    get info() {
        return this.playerData;
    };
};

export default Player;
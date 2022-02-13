class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static create(id, name) {
        return new Player(id, name);
    }
}

export default Player;
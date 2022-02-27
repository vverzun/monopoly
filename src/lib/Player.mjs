class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.balance = 1500;
        this.property = new Map();

        this.isLoggedIn = true;
        this.isReady = false;
        this.isPrisoner = false;     
        this.isDecide = false;
        this.isDiceRollNeeded = false;
        this.isCardNumberNeeded = {
            type: '',
            isNeeded: false
        };
        this.isAuctionMember = false;

        this.freePrisonEscape = 0; 
        this.nextPaymentTimes = 0;
        this.error = '';
    };

    static create(id, name) {
        return new Player(id, name);
    };

    get playerData() {
        return {
            name: this.name,
            balance: this.balance,
            property: Array.from(this.property.values()),

            isLoggedIn: this.isLoggedIn,
            isReady: this.isReady,
            isPrisoner: this.isPrisoner,
            isDecide: this.isDecide,
            isDiceRollNeeded: this.isDiceRollNeeded,
            isCardNumberNeeded: this.isCardNumberNeeded,
            isAuctionMember: this.isAuctionMember,
            
            freePrisonEscape: this.freePrisonEscape,
            error: this.error
        };
    };

    toggleStatus(status) {
        this[status] = !this[status];
    };

    pay(amount) {                
        //assume that there is always enough money on the balance 
        this.balance -= amount;
    };

    payRent(amount, propertyOwner) {
        if (Array.isArray(propertyOwner)) {
            propertyOwner.forEach(owner => {
                owner.balance += amount;
                this.pay(amount);
            });
        } else {
            propertyOwner.balance += amount;
            this.pay(amount);    
        }
    };

    buyProperty(property, auctionPrice) {
        this.property.set(property.id, property);
        this.pay(auctionPrice ? auctionPrice : property.price);
    };

    calculateServiceRent(diceRollResult) {
        let count = 0, amount = diceRollResult;
        
        this.property.forEach(property => {
            if (property.type === 'service') count++;
        });

        if (count === 2) amount *= 10;
        else amount *= 4;
    
        return amount;
    };

    calculateRailwayRent(id) {
        let count = 0;

        this.property.forEach(property => {
            if (property.type === 'railway') count++;
        });
        
        return this.property.get(id).rent[count - 1];
    };

    calculateStreetRent(id) {
        let amount = 0;
        const rentProperty = this.property.get(id); 
    
        if (rentProperty.houses) {
            amount += rentProperty.houseRent[rentProperty.houses - 1];
        }
        if (rentProperty.hotels) {
            amount += rentProperty.hotels * rentProperty.hotelRent;
        }
                                                        
        return amount ? amount : rentProperty.rent;
    };

    calculateOwnProperty(perHouse, perHotel) {
        let sum = 0;
        this.property.forEach(property => {
            if (property.houses) sum = sum + (houses * perHouse);
            if (property.hotels) sum = sum + (hotels * perHotel);
        });

        return sum;
    };
};

export default Player;
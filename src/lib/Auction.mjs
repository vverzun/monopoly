class Auction {
    constructor(players, decisionProperty) {
        this.auctionMembers = players;
        this.isAuctionStarted = true;
        this.auctionProperty = decisionProperty;         
        this.highestBid = '0';        
        this.auctionWinner = '';
    };

    static create(players, property) {
        players.forEach(player => {
            player.toggleStatus('isAuctionMember');
        });

        return new Auction(players, property);
    };

    get auctionData() {
        let winner = this.auctionMembers.get(this.auctionWinner);
        winner = (winner) ? winner : {playerName: 'Be the first to place your bid!!'};

        return {
            auctionMembers: this.auctionMembers,
            isAuctionStarted: this.isAuctionStarted,
            auctionProperty: this.auctionProperty,
            highestBid: this.highestBid,
            auctionWinner: winner 
        };
    };

    placeBid(id, bid) {              
        this.highestBid = bid;                                      
        this.auctionWinner = id;                                                
    };

    countAuctionMembers() {
        let count = 0;
        this.auctionMembers.forEach(member => {
            if (member.isAuctionMember) count++;
        });

        return count;
    };

    excludeAuctionMember(id) {
        this.auctionMembers.get(id).toggleStatus('isAuctionMember');
    };
    
    finishAuction() {
        this.isAuctionStarted = false;            
        
        const winner = this.auctionMembers.get(this.auctionWinner);
        
        winner.buyProperty(this.auctionProperty, this.highestBid);
        winner.toggleStatus('isAuctionMember');
    };
};

export default Auction;
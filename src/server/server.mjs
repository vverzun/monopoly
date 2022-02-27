import http from 'http';
import WebSocket from 'ws';
import Game from '../lib/Game.mjs';
import config from './config.mjs';
import events from '../helpers/events.mjs';
import uuid from 'uuid';

const server = http.createServer();
const wss = new WebSocket.Server({server});

const game = Game.create();

const broadcast = () => {
    const response = {
        type: events.UPDATE,
        gameData: game.gameData
    };

    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            const player = response.playerData = game.findPlayer(client.id);
            response.playerData = player.playerData ? player.playerData : {}; 

            client.send(JSON.stringify(response));
        };
    });
};

wss.on('connection', ws => {
    ws.id = uuid.v4();
    ws.isAlive = true;    

    ws.on('message', request => {
        request = JSON.parse(request);                                                                     
        const player = game.findPlayer(ws.id);
        player.error = '';

        switch(request.type) {
            case events.PLAYER_ADD: {
                const response = {
                    type: events.ERROR,
                    error: ''
                };

                if (game.isGameStarted) {
                    response.error = 'Can\'t login, the game has already started';
                    ws.send(JSON.stringify(response));
                } 
                else if (game.players.size === 6) {
                    response.error = 'Can\'t login, there are maximum number of players in the lobby';    
                    ws.send(JSON.stringify(response));
                }
                else {
                    game.addPlayer(ws, request.name);
                    game.createLog(`${request.name} joined us!`); 
                    
                    broadcast();
                };
            }; break;

            case events.PLAYER_READY: {
                player.toggleStatus('isReady');
                game.createLog(`${player.name} ${player.isReady ? 'is' : 'not'} ready.`);
                game.update();
                
                if (game.players.size === game.readyPlayers) { 
                    game.toggleStatus('isGameStarted');
                    game.createLog('Game has started!');
                };

                broadcast();
            }; break;

            case events.PLAYER_PASS_GO: {
                player.pay(-200);
                game.createLog(`${player.name} received 200$ for passing GO!`)
                
                broadcast();
            }; break;

            case events.PLAYER_ON_PROPERTY: {
                const [isAvailable, propertyOwner] = game.isPropertyAvailable(request.data.id);
                
                if (isAvailable) {
                    if (player.nextPaymentTimes) player.nextPaymentTimes = 0;
                    
                    game.holdDecisionProperty(request.data);
                    player.toggleStatus('isDecide');
                }
                else {
                    const type = request.data.type;
                    
                    if (type === 'street' || type === 'railway') {
                        let amount;

                        if (type === 'street') amount = propertyOwner.calculateStreetRent(request.data.id);
                        else {
                            amount = propertyOwner.calculateRailwayRent(request.data.id);
                            
                            if (player.nextPaymentTimes) {
                                amount *= player.nextPaymentTimes;
                                player.nextPaymentTimes = 0;
                            };
                        }
                        
                        player.payRent(amount, propertyOwner);
                        game.createLog(`${player.name} payed ${amount}$ to ${propertyOwner.name}.`);                                
                    }
                    else { 
                        player.toggleStatus('isDiceRollNeeded');
                        request.data.owner = propertyOwner;                                        

                        game.holdDecisionProperty(request.data);
                    };                                       
                };

                broadcast();
            }; break;

            case events.PLAYER_ON_CARD_DRAW: {
                player.isCardNumberNeeded.isNeeded = true;
                player.isCardNumberNeeded.type = request.data.type;

                broadcast();
            }; break;

            case events.PLAYER_ON_TAX: {
                player.pay(request.data.tax);
                game.createLog(`${player.name} payed ${request.data.tax}$ tax.`);
                
                broadcast();
            }; break;

            case events.PLAYER_ON_JAIL: {
                if (request.data.isPrisoner) player.isPrisoner = true;
                game.createLog(`${player.name} goes directly to the prison, we will miss you.`);
                
                broadcast();
            }; break;

            case events.PLAYER_BID: {
                if(!/^[0-9]+$/.test(request.bid)){
                    player.error = 'Please, enter numeric characters only! (Allowed input:0-9).';
                } 
                else if (request.bid <= game.auction.highestBid) {
                    player.error =  'Can\'t apply your bid, it must be bigger than the current highest bid!';     
                }
                else {
                    game.auction.placeBid(player.id, request.bid);
                };

                broadcast();
            }; break;

            case events.PLAYER_LEAVE_AUCTION: {
                if (player.id === game.auction.auctionWinner) {
                    player.error = 'You can\'t leave the auction because you are the winner right now.';
                } 
                else if (!game.auction.auctionWinner) {
                    player.error = 'You can\'t leave the auction because there is no winner. Be the first to place the bid!';
                }
                else {
                    game.auction.excludeAuctionMember(player.id);
                    game.createLog(`${player.name} has left the auction. Only ${game.auction.countAuctionMembers()} left!`);

                    if (game.auction.countAuctionMembers() === 1) { 
                        game.auction.finishAuction();
                        game.createLog(`
                            Auction is finished.
                            The winner is ${game.findPlayer(game.auction.auctionWinner).name}.
                            Lot: ${game.auction.auctionProperty.title}.
                            Price: ${game.auction.highestBid}
                        `);
                    };
                };

                broadcast();
            }; break;

            case events.PLAYER_DICE_ROLL_RESULT: {
                let amount = game.decisionProperty.owner.calculateServiceRent(request.rollResult);
                
                if (player.nextPaymentTimes) {
                    amount *= player.nextPaymentTimes;
                    player.nextPaymentTimes = 0;
                };

                player.payRent(amount, game.decisionProperty.owner);
                game.createLog(`${player.name} payed ${amount}$ to ${game.decisionProperty.owner.name}.`);
                player.toggleStatus('isDiceRollNeeded');
                
                broadcast();
            }; break;

            case events.PLAYER_CARD_NUMBER_RESULT: {
                const card = request.card;
                player.isCardNumberNeeded.isNeeded = false;
                
                if (card.price)
                    if (card.toEach) { 
                        player.payRent(card.price, Array.from(game.players.values()));
                        game.createLog(`${player.name} payed ${card.price}$ to everyone!`);
                    }
                    else if (card.fromEach) {
                        const otherPlayers = Array.from(game.players.values()).filter(item => item.id !== player.id);
                        otherPlayers.forEach(otherPlayer => {
                            otherPlayer.payRent(Math.abs(card.price), player);
                        });
                        game.createLog(`Every player has payed ${Math.abs(card.price)}$ to ${player.name}`);
                    }
                    else {
                        player.pay(card.price);
                        game.createLog(`${player.name} ${card.price < 0 ? 'received': 'lost'} ${Math.abs(card.price)}$`);
                    }
                else if (card.freePrisonEscape) {
                    player.freePrisonEscape += 1;
                    game.createLog(`${player.name} can get out of the jail for free!`);
                }
                else if (card.nextPaymentTimes) {
                    player.nextPaymentTimes = card.nextPaymentTimes;
                    game.createLog(`Poor ${player.name}, his next transaction is multiplied by ${card.nextPaymentTimes} :c`);
                }
                else if (card.isPrisoner) {
                    player.isPrisoner = true;
                    game.createLog(`${player.name}, bad news for you. Go to the prison!`);
                }
                else if (card.pricePerHouse && card.pricePerHotel) { 
                    const price = player.calculateOwnProperty(card.pricePerHouse, card.pricePerHotel);
                    player.pay(price);
                    game.createLog(`${player.name} payed ${price}$ for all of his property.`);
                };

                broadcast();
            }; break;

            case events.PLAYER_DECISION_RESULT: {
                if (request.decision === 'Yes') {
                    player.buyProperty(game.decisionProperty);
                    game.createLog(`${player.name} bought ${game.decisionProperty.title}.`);
                } else {
                    game.startAuction();
                    game.createLog('Auction started!');
                };                                                      

                player.toggleStatus('isDecide');

                broadcast();
            }; break;
            
            case events.PONG: ws.isAlive = true; break;

            default: console.log('Unknown data type caught'); break;                                   
        };
    });

    ws.on('close', () => {
        const player = game.findPlayer(ws.id);

        if (player.isLoggedIn) {
            game.createLog(`${player.name} has left the game.`);
        };
        
        game.removePlayer(ws.id);     
        
        if (game.players.size === 0) {
            game.toggleStatus('isGameStarted');
        };

        broadcast();
    });
});

setInterval(() => {
    wss.clients.forEach(ws => {
        if (!ws.isAlive) return ws.close();

        ws.isAlive = false;
        ws.send(JSON.stringify({type: events.PING}));                                                     
    });
}, 30000);

server.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});

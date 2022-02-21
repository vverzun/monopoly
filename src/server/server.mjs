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

        switch(request.type) {
            case events.PLAYER_ADD: {
                game.addPlayer(ws, request.name);

                broadcast();
            }; break;

            case events.PLAYER_READY: {
                game.findPlayer(ws.id).toggleStatus('isReady');
                game.update();

                broadcast();
            }; break;

            case events.PLAYER_ON_PROPERTY: {
                const [isAvailable, player] = game.isPropertyAvailable(request.property.id);
                
                if (isAvailable) {
                    game.findPlayer(ws.id).toggleStatus('isDecide');                                                            
                    game.holdDecisionProperty(request.property);
                }
                else game.findPlayer(ws.id).payRent(request.property.rent, player);
    
                broadcast();
            }; break;

            case events.PLAYER_DECIDE: {
                if (request.decision === 'Yes') 
                    game.findPlayer(ws.id).buyProperty(game.decisionProperty);
                else 
                    game.startAuction();                                                      

                game.findPlayer(ws.id).toggleStatus('isDecide');

                broadcast();
            }; break;

            case events.PLAYER_BID: {
                game.auction.placeBid(ws.id, request.bid);

                broadcast();
            }; break;

            case events.PLAYER_LEAVE_AUCTION: {
                game.auction.excludeAuctionMember(ws.id);

                broadcast();
            }; break;

            case events.PONG: ws.isAlive = true; break;

            default: console.log('Unknown data type caught'); break;                                   
        };
    });

    ws.on('close', () => {
        game.removePlayer(ws.id);                                                                 

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

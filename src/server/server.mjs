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
    const response = {};

    response.type = events.UPDATE;
    response.gameData = game.gameData;
    
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            const player = game.find('players', client.id);
            response.playerData = (player) ? player.playerData : {};
            console.log(response);   
            
            client.send(JSON.stringify(response));
        }
    });
};

wss.on('connection', ws => {
    ws.id = uuid.v4();
    ws.isAlive = true;

    ws.on('message', request => {
        request = JSON.parse(request);                                                                 

        switch(request.type) {
            case events.PLAYER_ADD: {
                game.addPlayer(ws, request.data);

                broadcast();
            }; break;

            case events.PLAYER_READY: {
                game.togglePlayerStatus(ws.id);
            
                broadcast();
            }; break;

            case events.PLAYER_PASS_TURN: {
                game.passPlayerTurn();

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

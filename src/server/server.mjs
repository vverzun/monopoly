import http from 'http';
import WebSocket from 'ws';
import Game from '../lib/Game.mjs';
import config from './config.mjs';
import events from './events.mjs';
import uuid from 'uuid';

const server = http.createServer();
const wss = new WebSocket.Server({server});

const game = Game.create();

const broadcast = message => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
};

wss.on('connection', ws => {
    ws.id = uuid.v4();
    ws.isAlive = true;

    ws.on('message', message => {
        message = JSON.parse(message);                                                                 
        
        switch(message.type) {
            case events.PLAYER_ADD: {
                game.addNewPlayer(ws, message.playerData);
                
                message.type = events.PLAYER_UPDATE;
                message.playerData.isLoggedIn = true;
                message.playerData.isReady = false;
                
                game.updatePlayerData(ws.id, message.playerData); 
                ws.send(JSON.stringify(message));

                message.type = events.GAME_UPDATE;
                message.gameData.players = game.playersSize;
                message.gameData.readyPlayers = game.countReadyPlayers();
                broadcast(message);                                                
            }; break;

            case events.PLAYER_READY: {
                message.playerData.isReady = !message.playerData.isReady;
                game.updatePlayerData(ws.id, message.playerData);

                message.type = events.PLAYER_UPDATE;
                ws.send(JSON.stringify(message));
                
                message.type = events.GAME_UPDATE;
                message.gameData.readyPlayers = game.countReadyPlayers();
                if (message.gameData.readyPlayers === message.gameData.players) {
                    game.status = true;
                    message.gameData.isGameStarted = true;
                }
                broadcast(message);
            }; break;

            case events.PONG: ws.isAlive = true; break;

            default: console.log('Unknown data type caught'); break;                                   
        };
    });

    ws.on('close', () => {
        game.removePlayer(ws.id);

        const message = {
            type: events.GAME_UPDATE,
            gameData: {}
        }

        message.gameData.readyPlayers = game.countReadyPlayers();
        message.gameData.players = game.playersSize;
        broadcast(message);
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

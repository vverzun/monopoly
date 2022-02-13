import http from 'http';
import WebSocket from 'ws';
import Game from '../lib/Game.mjs';
import config from './config.mjs';

const server = http.createServer();
const wss = new WebSocket.Server({server});

const game = Game.create();

wss.getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

wss.on('connection', ws => {
    ws.id = wss.getUniqueID();

    ws.on('message', data => {
        console.log(`Received message`);
        data = JSON.parse(data);
        
        switch(data.type) {
            case 'new player': {
                game.createNewPlayer(ws, data.name);
                ws.send(`Welcome to the game ${data.name}!`);
            }; break;
            default: ws.send('Unknown message type caught'); break;
        }
    });
    
    ws.send('Connection set');
});

server.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});

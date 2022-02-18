import React, {useEffect, useState} from 'react';
import AuthForm from '../organisms/AuthForm';
import PlayerInterface from '../organisms/PlayerInterface';
import events from '../../../server/events.mjs';

const ws = new WebSocket('ws://localhost:3030');
let pingTimeout;

const addNewPlayer = (name, gameData) => {
    const message = { 
        playerData: {
            name: name
        },
        gameData
    };

    message.type = events.PLAYER_ADD,
    ws.send(JSON.stringify(message));
};

const setPlayerStatus = (playerData, gameData) => {
    const message = {
        playerData, gameData
    };
    
    message.type = events.PLAYER_READY;
    ws.send(JSON.stringify(message));
};

const heartbeat = () => {
    clearTimeout(pingTimeout);
    
    const message = {};

    message.type = events.PONG;
    ws.send(JSON.stringify(message));
    
    pingTimeout = setTimeout(() => {
        ws.close();
    }, 30000 + 1000);
};

const App = () => {
    const [playerData, handleUpdatePlayer] = useState({});
    const [gameData, handleUpdateGame] = useState({});
    const [name, handleChange] = useState('');
    
    useEffect(() => {
        ws.onopen = () => heartbeat();
        ws.onmessage = message => {
            message = JSON.parse(message.data);
            
            switch(message.type) {
                case events.PLAYER_UPDATE: handleUpdatePlayer(message.playerData); break;
                case events.GAME_UPDATE: handleUpdateGame(message.gameData); break;
                case events.PING: heartbeat(); break;
            };
        };
        ws.onclose = () => clearTimeout(pingTimeout);
    }, [playerData, gameData]);

    return (
        <div>
            {playerData.isLoggedIn
                ? 
                <PlayerInterface
                    {...playerData}
                    {...gameData}
                    handleClick={() => setPlayerStatus(playerData, gameData)}
                />    
                :
                <AuthForm
                    handleSubmit={() => addNewPlayer(name, gameData)}
                    handleChange={event => handleChange(event.target.value)}
                />
            }
        </div> 
    );
};

export default App;
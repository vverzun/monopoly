import React, {useEffect, useState} from 'react';
import AuthForm from '../organisms/AuthForm';
import PlayerView from '../organisms/PlayerView';
import events from '../../../helpers/events.mjs';
import helpers from '../../../helpers/helpers.mjs';

const ws = new WebSocket('ws://localhost:3030');
let pingTimeout;

const heartbeat = () => {
    clearTimeout(pingTimeout);
    
    const request = {
        type: events.PONG
    };

    ws.send(JSON.stringify(request));
    
    pingTimeout = setTimeout(() => {
        ws.close();
    }, 30000 + 1000);
};

const App = () => {
    const [data, update] = useState({
        playerData: {}, 
        gameData: {}}
    );
    const [name, handleChange] = useState('');
    
    useEffect(() => {
        ws.onopen = () => heartbeat();
        ws.onmessage = response => {
            response = JSON.parse(response.data);
            
            switch(response.type) {
                case events.UPDATE: update(response); break;
                case events.PING: heartbeat(); break;
            };
        };
        ws.onclose = () => clearTimeout(pingTimeout);
    }, [data]);

    return (
        <div>
            {data.playerData.isLoggedIn
                ? 
                <PlayerView
                    {...data}
                    handleCheckClick={() => helpers.changePlayerStatus(ws)}
                    handleTurnClick={() => helpers.passPlayerTurn(ws)}
                />    
                :
                <AuthForm
                    handleSubmit={() => helpers.addPlayer(name, ws)}
                    handleChange={event => handleChange(event.target.value)}
                />
            }
        </div> 
    );
};

export default App;
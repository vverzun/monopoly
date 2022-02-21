import React, {useEffect, useState} from 'react';
import InputForm from '../molecules/InputForm';
import PlayerView from '../organisms/PlayerView';
import events from '../../../helpers/events.mjs';
import actions from '../../../helpers/actions.mjs';
import TestInput from './TestInput';

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
        gameData: {}
    });
    const [inputValue, handleChange] = useState('');
    
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
            {
                data.playerData.isLoggedIn
                ? 
                <PlayerView
                    {...data}
                    handleCheckClick={() => actions.changePlayerStatus(ws)}
                    handleDecisionClick={event => actions.getPlayerDecision(event.target.value, ws)}
                    handleBidChange={event => handleChange(event.target.value)}
                    handleBidSubmit={() => actions.submitPlayerBid(inputValue, ws)}
                    handleLeaveClick={() => actions.playerLeaveAuction(ws)}
                />    
                :
                <InputForm
                    id='name'
                    labelText='Enter your name: '
                    handleSubmit={() => actions.addPlayer(inputValue, ws)}
                    handleChange={event => handleChange(event.target.value)}
                />
            }
            
            <TestInput
                ws={ws}
            />
        </div> 
    );
};

export default App;
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
    const [error, handleError] = useState('');

    useEffect(() => {
        ws.onopen = () => heartbeat();
        ws.onmessage = response => {
            response = JSON.parse(response.data);
            
            switch(response.type) {
                case events.UPDATE: update(response); break;
                case events.ERROR: handleError(response.error); break;
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
                handleChange={event => handleChange(event.target.value)}
                handleCheckClick={() => actions.changePlayerStatus(ws)}
                handleDecisionClick={event => actions.sendPlayerDecision(event.target.value, ws)}
                handleLeaveClick={() => actions.playerLeaveAuction(ws)}
                handleBidSubmit={() => actions.submitPlayerBid(inputValue, ws)}
                handleCardNumberSubmit={() => actions.submitCardNumber(inputValue, data, ws)}
                handleDiceRollSubmit={() => actions.submitDiceRollResult(inputValue, ws)}
            />    
            :
            <>
                <InputForm
                    id='name'
                    labelText='Enter your name: '
                    handleChange={event => handleChange(event.target.value)}
                    handleSubmit={() => actions.addPlayer(inputValue, ws)}
                />
                {error && <p>Error: {error}</p>}
            </>}

            <TestInput 
                ws={ws}
            />
        </div> 
    );
};

export default App;
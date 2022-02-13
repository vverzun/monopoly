import React, {useEffect, useState} from 'react';
import AuthForm from '../organisms/AuthForm';

const ws = new WebSocket('ws://localhost:3030');

const createNewPlayer = (event, name) => {
    event.preventDefault();

    const data = {
        type: 'new player',
        name: name
    }

    ws.send(JSON.stringify(data)); 
};

const App = () => {
    useEffect(() => { 
        ws.onmessage = message => {
            console.log(message.data);
        };
    });

    const [name, handleChange] = useState('');

    return (
        <AuthForm
            handleSubmit={event => createNewPlayer(event, name)}
            handleChange={event => handleChange(event.target.value)}
        />
    );      
};

export default App;
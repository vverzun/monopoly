import React, { useState } from 'react';
import events from '../../../helpers/events.mjs';
import gameboard from '../../../lib/mock/gameboard_mock.mjs';
import InputForm from '../molecules/InputForm';

const sendProperty = (index, ws) => {
    const dictionary = {
        'go': events.PLAYER_PASS_GO,
        'street': events.PLAYER_ON_PROPERTY,
        'railway': events.PLAYER_ON_PROPERTY,
        'service': events.PLAYER_ON_PROPERTY,
        'tax': events.PLAYER_ON_TAX,
        'community chest': events.PLAYER_ON_CARD_DRAW,
        'chance': events.PLAYER_ON_CARD_DRAW,
        'jail': events.PLAYER_ON_JAIL,
    }
    
    const request = {
        type: dictionary[gameboard[index].type],
        data: gameboard[index]
    };

    ws.send(JSON.stringify(request));
};

const TestInput = ({ws}) => {
    const [index, updateIndex] = useState('');

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <InputForm
                id='test'
                labelText='Trigger card index: '
                handleSubmit={() => sendProperty(index, ws)}
                handleChange={e => updateIndex(e.target.value)}
            />
        </div> 
    );
};

export default TestInput;

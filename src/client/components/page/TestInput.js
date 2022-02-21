import React from 'react';
import events from '../../../helpers/events.mjs';
import property from '../../../lib/property-mock.mjs';

const sendProperty = (event, ws) => {
    const request = {
        type: events.PLAYER_ON_PROPERTY,
        property: property[+event.target.value]
    };

    ws.send(JSON.stringify(request));
};

const TestInput = ({ws}) => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button value="0" onClick={event => sendProperty(event, ws)}>
                Use '0' property
            </button>
            <button value="1" onClick={event => sendProperty(event, ws)}>
                Use '1' property
            </button>
        </div> 
    );
};

export default TestInput;

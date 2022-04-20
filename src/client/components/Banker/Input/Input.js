import React from 'react';
import {useSelector} from 'react-redux';
import PropertyDecision from './PropertyDecision/PropertyDecision';
import events from '../../../request/events';

const Input = () => {
    const inputType = useSelector(state => state.player.inputType);

    return (
        <>
            <PropertyDecision
                isOpen={inputType === events.PROPERTY_DECISION}
            />
        </>        
    );
};

export default Input;
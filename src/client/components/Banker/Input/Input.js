import React from 'react';
import {useSelector} from 'react-redux';
import PropertyDecision from './PropertyDecision/PropertyDecision';
import events from '../../../request/events';

const Input = () => {
    const {input} = useSelector(state => state.player);

    return (
        <>
            <PropertyDecision
                isOpen={input.type === events.PROPERTY_DECISION}
            />
        </>        
    );
};

export default Input;
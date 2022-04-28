import React from 'react';
import {useSelector} from 'react-redux';
import PropertyDecision from './PropertyDecision/PropertyDecision';
import TradeDecision from './TradeDecision/TradeDecision';
import events from '../../../request/events';

const Input = () => {
	const inputType = useSelector((state) => state.player.inputType);

	return (
		<>
			<PropertyDecision
				isOpen={inputType === events.PROPERTY_DECISION}
			/>
			<TradeDecision
				isOpen={inputType === events.TRADE_DECISION}
			/>
		</>
	);
};

export default Input;

import React, {useState} from 'react';
import {ws} from './App';
import {gameEvents} from '../../../server/events';
import gameboard from '../../../lib/mock/gameboardMock.mjs';
import InputForm from '../molecules/InputForm';

const sendCardData = (index) => {
	const dictionary = {
		'go': gameEvents.PASS_GO,
		'street': gameEvents.PROPERTY,
		'railway': gameEvents.PROPERTY,
		'service': gameEvents.PROPERTY,
		'tax': gameEvents.TAX,
		'communityChest': gameEvents.DRAW_CARD,
		'chance': gameEvents.DRAW_CARD,
		'prison': gameEvents.PRISON,
	};

	const request = {
		type: dictionary[gameboard[index].type],
		data: gameboard[index],
	};

	ws.send(JSON.stringify(request));
};

const CardInput = () => {
	const [inputValue, handleChange] = useState('');

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
				id='cardIndex'
				labelText='Trigger card index: '
				handleSubmit={() => sendCardData(inputValue)}
				handleChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
};

export default CardInput;

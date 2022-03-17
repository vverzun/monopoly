import React, {useEffect, useState} from 'react';
import InputForm from '../molecules/InputForm';
import PlayerView from '../organisms/PlayerView';
import {gameEvents} from '../../../server/events.mjs';
import actions from '../../actions/actions.mjs';
import CardInput from './CardInput';

export const ws = new WebSocket('ws://localhost:3030');
let pingTimeout;

const heartbeat = () => {
	clearTimeout(pingTimeout);

	const request = {
		type: gameEvents.PONG,
	};

	ws.send(JSON.stringify(request));

	pingTimeout = setTimeout(() => {
		ws.close();
	}, 20000 + 1000);
};

const App = () => {
	const [data, updateData] = useState({playerData: {}, gameData: {}});
	const [inputValue, handleChange] = useState('');
	const [error, handleError] = useState('');

	useEffect(() => {
		ws.onopen = () => heartbeat();
		ws.onmessage = (response) => {
			response = JSON.parse(response.data);

			switch (response.type) {
			case gameEvents.UPDATE: {
				handleError('');
				updateData(response);
			}; break;
			case gameEvents.PING: heartbeat(); break;
			case gameEvents.ERROR: handleError(response.error); break;
			};
		};
		
		ws.onclose = () => clearTimeout(pingTimeout);
	}, [data]);

	return (
		<div>
			{data.playerData.isLoggedIn ?
				<PlayerView
					{...data}
					handleChange={(event) => handleChange(event.target.value)}
					handleBuyClick={(event) => actions.buildingAction(event.target.parentNode.id, event.target.value)}
					handleCheckClick={actions.changePlayerStatus}
					handleDecisionClick={(event) => actions.sendPlayerDecision(event.target.value)}
					handleLeaveClick={actions.playerLeaveAuction}
					handlePrisonClick={() => actions.leavePrison(event.target.value)}
					handleMortgageClick={() => actions.mortgageProperty(event.target.parentNode.id, event.target.value)}
					handleBidSubmit={() => actions.submitPlayerBid(inputValue)}
					handleCardNumberSubmit={() => actions.submitCardNumber(inputValue, data.playerData)}
					handleDiceRollSubmit={() => actions.submitDiceRollResult(inputValue)}
					//handleBuyBackClick={() => actions.redeemMortgageProperty(event.target.parentNode.id)}
					//handleSellClick={() => actions.sellBuilding(event.target.value, event.target.parentNode.id)}
					handleTrade={() => actions.trade(event.target.parentNode.id, inputValue, event.target.value)}
					playerOnBankrupt={actions.playerOnBankrupt}
				/> :

				<>
					<InputForm
						id='name'
						labelText='Enter your name: '
						handleChange={(event) => handleChange(event.target.value)}
						handleSubmit={() => actions.addPlayer(inputValue)}
					/>
				</>
			}
			{error && <p>{error}</p>}
			<CardInput/>
		</div>
	);
};

export default App;

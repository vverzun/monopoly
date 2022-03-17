import React from 'react';
import PropTypes from 'prop-types';
import PlayerInterface from '../organisms/PlayerInterface';
import ReadyCheck from '../molecules/ReadyCheck';
import GameLog from '../molecules/GameLog';

const PlayerView = (props) => {
	const {
		playerData,
		gameData,
		handleChange,
		handleBuyClick,
		handleCheckClick,
		handleDecisionClick,
		handleLeaveClick,
		handlePrisonClick,
		handleBidSubmit,
		handleCardNumberSubmit,
		handleDiceRollSubmit,
		handleMortgageClick,
		handleBuyBackClick,
		handleSellClick,
		handleSellPropertyClick,
		handleSellEscapeClick,
		playerOnBankrupt,
		handleTrade
	} = props;

	return (
		<div>
			{gameData.isGameStarted ?
				<PlayerInterface
					{...playerData}
					{...gameData}
					handleTrade={handleTrade}
					handleChange={handleChange}
					handleBuyClick={handleBuyClick}
					handleDecisionClick={handleDecisionClick}
					handleLeaveClick={handleLeaveClick}
					handlePrisonClick={handlePrisonClick}
					handleBidSubmit={handleBidSubmit}
					handleCardNumberSubmit={handleCardNumberSubmit}
					handleDiceRollSubmit={handleDiceRollSubmit}
					handleMortgageClick={handleMortgageClick}
					handleBuyBackClick={handleBuyBackClick}
					handleSellClick={handleSellClick}
					handleSellPropertyClick={handleSellPropertyClick}
					handleSellEscapeClick={handleSellEscapeClick}
					playerOnBankrupt={playerOnBankrupt}
				/> :
				<ReadyCheck
					{...playerData}
					{...gameData}
					handleCheckClick={handleCheckClick}
				/>}
			<GameLog
				gameLog={gameData.logData}
			/>
		</div>
	);
};

PlayerView.propTypes = {
	playerData: PropTypes.object.isRequired,
	gameData: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBuyClick: PropTypes.func.isRequired,
	handleCheckClick: PropTypes.func.isRequired,
	handleDecisionClick: PropTypes.func.isRequired,
	handleLeaveClick: PropTypes.func.isRequired,
	handlePrisonClick: PropTypes.func.isRequired,
	handleBidSubmit: PropTypes.func.isRequired,
	handleCardNumberSubmit: PropTypes.func.isRequired,
	handleDiceRollSubmit: PropTypes.func.isRequired,
	handleMortgageClick: PropTypes.func.isRequired
};

export default PlayerView;

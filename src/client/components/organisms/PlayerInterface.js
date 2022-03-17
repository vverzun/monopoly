import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../molecules/Dashboard';
import PlayerDecision from '../molecules/PlayerDecision';
import Auction from '../molecules/Auction';
import InputForm from '../molecules/InputForm';
import Prison from '../molecules/Prison';
import uuid from 'uuid';
import Button from '../atoms/Button';
import Bankruptsy from '../molecules/Bankruptcy';

const PlayerInterface = (props) => {
	const {
		name,
		property,
		freePrisonEscape,
		isAuction,
		input,
		isPrisoner,
		id,
		balance,

		players,
		holdProperty,
		auctionData,

		handleChange,
		handleBuyClick,
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
			<h1>{name}</h1>
			{balance < 0 
				&& 
			<Bankruptsy
				balance={balance}
				playerOnBankrupt={playerOnBankrupt}
			/>}
			
			<Dashboard
				id={id}
				players={players}
				property={property}
				handleBuyClick={handleBuyClick}
				handleMortgageClick={handleMortgageClick}
				handleBuyBackClick={handleBuyBackClick}
				handleSellClick={handleSellClick}
				handleSellPropertyClick={handleSellPropertyClick}
				handleTrade={handleTrade}
				handleChange={handleChange}
			/>

			{input.type === 'propertyDecision' &&
			<PlayerDecision
				holdProperty={holdProperty}
				handleDecisionClick={handleDecisionClick}
			/>}

			{isAuction &&
			<Auction
				{...auctionData}
				name={name}
				handleChange={handleChange}
				handleLeaveClick={handleLeaveClick}
				handleBidSubmit={handleBidSubmit}
			/>}

			{input.type === 'diceRoll' &&
			<InputForm
				id='diceRollResult'
				labelText='Enter the dice roll result: '
				handleChange={handleChange}
				handleSubmit={handleDiceRollSubmit}
			/>}

			{(input.type === 'communityChest' || input.type === 'chance') &&
			<InputForm
				id='cardNumber'
				labelText={`Enter the number of ${input.type} card: `}
				handleChange={handleChange}
				handleSubmit={handleCardNumberSubmit}
			/>}

			{isPrisoner &&
			<Prison
				handlePrisonClick={handlePrisonClick}
				freePrisonEscape={freePrisonEscape}
			/>}
			{!!freePrisonEscape 
				&&
			<>
			<p>You have {freePrisonEscape} free prison escapes</p>
			<Button
				text='trade free prison escape'
				value='prisonEscape'
				handleClick={handleTrade}
			/>
			<select id="new" onChange={handleChange}>
				{players.map(player => {
					if (player.id !== id) return <option key={uuid.v4()} value={player.id}>{player.name}</option>
				})}
			</select>
			</>}
			
		</div>
	);
};

PlayerInterface.propTypes = {
	name: PropTypes.string.isRequired,
	property: PropTypes.arrayOf(PropTypes.object).isRequired,
	freePrisonEscape: PropTypes.number.isRequired,
	isAuction: PropTypes.bool.isRequired,
	input: PropTypes.object.isRequired,
	isPrisoner: PropTypes.bool.isRequired,

	players: PropTypes.arrayOf(PropTypes.object).isRequired,
	holdProperty: PropTypes.object.isRequired,
	auctionData: PropTypes.object.isRequired,

	handleChange: PropTypes.func.isRequired,
	handleBuyClick: PropTypes.func.isRequired,
	handleDecisionClick: PropTypes.func.isRequired,
	handleLeaveClick: PropTypes.func.isRequired,
	handlePrisonClick: PropTypes.func.isRequired,
	handleBidSubmit: PropTypes.func.isRequired,
	handleCardNumberSubmit: PropTypes.func.isRequired,
	handleDiceRollSubmit: PropTypes.func.isRequired,
	handleMortgageClick: PropTypes.func.isRequired
};

export default PlayerInterface;

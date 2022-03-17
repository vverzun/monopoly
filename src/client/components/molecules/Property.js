import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import uuid from 'uuid';

const Property = ({id, type, title, handleTrade, house, hotel, handleBuyClick, handleMortgageClick, isMortgaged, handleBuyBackClick, handleSellClick, players, playerId, handleChange, handleSellPropertyClick}) => {
	return (
		<div>
			<Text
				text={title}
			/>

			{type === 'street' &&
			<div id={id}>
				<Button
					text='Sell property'
					value='property'
					handleClick={handleTrade}
				/>
				<select id="newOwner" onChange={handleChange}>
					{players.map(player => {
						if (player.id !== playerId) return <option key={uuid.v4()} value={player.id}>{player.name}</option>
					})}
				</select>
				<Text
					text={`Houses: ${house}`}
				/>
				<Text
					text={`Hotels: ${hotel}`}
				/>
				<Button
					text='Buy house'
					value='house/buy'
					handleClick={handleBuyClick}
				/>
				<Button
					text='Buy hotel'
					value='hotel/buy'
					handleClick={handleBuyClick}
				/>
				<Button
					text='Sell house'
					value='house/sell'
					handleClick={handleBuyClick}
				/>
				<Button
					text='Sell hotel'
					value='hotel/sell'
					handleClick={handleBuyClick}
				/>
				{isMortgaged 
					?
				<Button
					text='BuyBack'
					value='unMortgage'
					handleClick={handleMortgageClick}
				/> 
					:
				<Button
					text='Mortgage'
					value='mortgage'
					handleClick={handleMortgageClick}
				/>}
				
			</div>}
		</div>
	);
};

Property.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	house: PropTypes.number.isRequired,
	hotel: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	handleBuyClick: PropTypes.func.isRequired,
	handleMortgageClick: PropTypes.func.isRequired,
	isMortgaged: PropTypes.bool.isRequired
};

export default Property;

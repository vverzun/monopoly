import React from 'react';
import PropTypes from 'prop-types';
import Property from './Property';
import Text from '../atoms/Text';

const PropertyList = ({property, handleTrade, handleBuyClick, handleMortgageClick, handleBuyBackClick, handleSellClick, handleSellPropertyClick, players, id, handleChange}) => {
	return (
		<div>
			<Text
				text={property.length ? 'Property' : 'You have no property'}
			/>

			{property.map((elem) => (
				<Property
					key={elem.id}
					{...elem}
					handleBuyClick={handleBuyClick}
					handleMortgageClick={handleMortgageClick}
					handleBuyBackClick={handleBuyBackClick}
					handleSellClick={handleSellClick}
					handleSellPropertyClick={handleSellPropertyClick}
					players={players}
					playerId={id}
					handleChange={handleChange}
					handleTrade={handleTrade}
				/>
			))}
		</div>
	);
};

PropertyList.propTypes = {
	property: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleBuyClick: PropTypes.func.isRequired,
	handleMortgageClick: PropTypes.func.isRequired
};

export default PropertyList;

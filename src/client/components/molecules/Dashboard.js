import React from 'react';
import PropTypes from 'prop-types';
import Leaderboard from './Leaderboard';
import PropertyList from './PropertyList';

const Dashboard = ({players, property, handleTrade, handleBuyClick, handleMortgageClick, handleBuyBackClick, handleSellClick, handleSellPropertyClick, id, handleChange}) => {
	return (
		<div>
			<Leaderboard
				players={players}
			/>
			<PropertyList
				id={id}
				property={property}
				handleBuyClick={handleBuyClick}
				handleMortgageClick={handleMortgageClick}
				handleBuyBackClick={handleBuyBackClick}
				handleSellClick={handleSellClick}
				handleSellPropertyClick={handleSellPropertyClick}
				players={players}
				handleChange={handleChange}
				handleTrade={handleTrade}
			/>
		</div>
	);
};

Dashboard.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object).isRequired,
	property: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleBuyClick: PropTypes.func.isRequired,
	handleMortgageClick: PropTypes.func.isRequired
};

export default Dashboard;

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import InputForm from './InputForm';

const Auction = (props) => {
	const {
		highestBid,
		winner,
		lot,
		handleChange,
		handleLeaveClick,
		handleBidSubmit,
	} = props;

	return (
		<div>
			<Text
				text={`Lot: ${lot.title}`}
			/>
			<Text
				text={`Highest bid: ${highestBid}`}
			/>
			<Text
				text={`Current Winner is: ${winner.name ? winner.name : ''}`}
			/>
			<InputForm
				id='bid'
				labelText='Place your bid here: '
				handleChange={handleChange}
				handleSubmit={handleBidSubmit}
			/>
			<Button
				text='Leave Auction'
				handleClick={handleLeaveClick}
			/>
		</div>
	);
};

Auction.propTypes = {
	name: PropTypes.string.isRequired,
	highestBid: PropTypes.string.isRequired,
	winner: PropTypes.object,
	handleChange: PropTypes.func.isRequired,
	handleLeaveClick: PropTypes.func.isRequired,
	handleBidSubmit: PropTypes.func.isRequired,
};

export default Auction;

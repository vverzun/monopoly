import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import InputForm from './InputForm';

const Auction = ({name, highestBid, auctionWinner, handleChange, handleLeaveClick, handleBidSubmit}) => {
    return (
        <div> 
            <Text
                text={`Highest bid: ${highestBid}`}
            />
            <Text
                text={`Current Winner is: ${auctionWinner.name === name ? 'You' : auctionWinner.name}`}
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
    auctionWinner: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    handleLeaveClick: PropTypes.func.isRequired,
    handleBidSubmit: PropTypes.func.isRequired
};

export default Auction;
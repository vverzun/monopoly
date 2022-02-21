import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import InputForm from './InputForm';

const Auction = ({highestBid, auctionWinner, playerName, handleLeaveClick, handleBidChange, handleBidSubmit}) => {
    return (
        <div> 
            <Text
                text={`Highest bid: ${highestBid}`}
            />
            <Text
                text={`Current Winner is: ${auctionWinner.playerName === playerName ? 'You' : auctionWinner.playerName}`}
            />
            <InputForm
                id='bid'
                labelText='Place your bid here: '
                handleChange={handleBidChange}
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
    highestBid: PropTypes.string.isRequired,
    auctionWinner: PropTypes.object,
    playerName: PropTypes.string.isRequired,
    handleBidSubmit: PropTypes.func.isRequired,
    handleBidChange: PropTypes.func.isRequired,
    handleLeaveClick: PropTypes.func.isRequired
};

export default Auction;
import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../molecules/Dashboard';
import PlayerDecision from '../molecules/PlayerDecision';
import Auction from '../molecules/Auction';

const PlayerInterface = props => {
    const {
        playerName,
        property,
        players,
        isDecide,
        decisionProperty,
        isAuctionMember,
        auctionData,
        handleDecisionClick,
        handleBidChange,
        handleBidSubmit,
        handleLeaveClick
    } = props;
    
    return (
        <div>
            <p>{`Remember, ${playerName}, this is only a game :)`}</p>
            <Dashboard
                curPlayerName={playerName}
                players={players}
                property={property}
            />

            {isDecide 
                && 
            <PlayerDecision 
                decisionProperty={decisionProperty}
                handleDecisionClick={handleDecisionClick} 
            />}

            {isAuctionMember
                && 
            <Auction
                {...auctionData}
                playerName={playerName}
                handleLeaveClick={handleLeaveClick}
                handleBidChange={handleBidChange}
                handleBidSubmit={handleBidSubmit}
            />}
        </div>
    );
};

PlayerInterface.propTypes = {
    playerName: PropTypes.string.isRequired, 
    property: PropTypes.arrayOf(PropTypes.object).isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isDecide: PropTypes.bool.isRequired,
    decisionProperty: PropTypes.object.isRequired,
    isAuctionMember: PropTypes.bool.isRequired,
    auctionData: PropTypes.object,
    handleDecisionClick: PropTypes.func.isRequired,
    handleBidChange: PropTypes.func.isRequired, 
    handleBidSubmit: PropTypes.func.isRequired,
    handleLeaveClick: PropTypes.func.isRequired
};

export default PlayerInterface;
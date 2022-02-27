import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../molecules/Dashboard';
import PlayerDecision from '../molecules/PlayerDecision';
import Auction from '../molecules/Auction';
import InputForm from '../molecules/InputForm';

const PlayerInterface = props => {
    const {
        name,
        property,
        freePrisonEscape,
        isAuctionMember,
        isCardNumberNeeded,
        isDiceRollNeeded,
        isDecide,
        isPrisoner,
        
        players,
        decisionProperty,
        auctionData,
        
        handleChange,
        handleDecisionClick,
        handleLeaveClick,
        handleBidSubmit,
        handleCardNumberSubmit,
        handleDiceRollSubmit
    } = props;
    
    return (
        <div>
            <h1>{name}</h1>
            <Dashboard
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
                name={name}
                handleChange={handleChange}
                handleLeaveClick={handleLeaveClick}
                handleBidSubmit={handleBidSubmit}
            />}

            {isDiceRollNeeded
                &&
            <InputForm
                id='diceRollResult'
                labelText='Enter the dice roll result: '
                handleChange={handleChange}
                handleSubmit={handleDiceRollSubmit}
            />}
            {isCardNumberNeeded.isNeeded
                &&
            <InputForm
                id='cardNumber'
                labelText={`Enter the number of ${isCardNumberNeeded.type} card: `}
                handleChange={handleChange}
                handleSubmit={handleCardNumberSubmit}
            />}
            {isPrisoner && <p>You are in the prison</p>}
            {!!freePrisonEscape && <p>You have {freePrisonEscape} free prison escapes</p>}
        </div>
    );
};

PlayerInterface.propTypes = {
    name: PropTypes.string.isRequired, 
    property: PropTypes.arrayOf(PropTypes.object).isRequired,
    freePrisonEscape: PropTypes.number.isRequired,
    isAuctionMember: PropTypes.bool.isRequired,
    isCardNumberNeeded: PropTypes.object.isRequired,
    isDiceRollNeeded: PropTypes.bool.isRequired,
    isDecide: PropTypes.bool.isRequired,
    isPrisoner: PropTypes.bool.isRequired,

    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    decisionProperty: PropTypes.object.isRequired,
    auctionData: PropTypes.object,
    
    handleChange: PropTypes.func.isRequired, 
    handleDecisionClick: PropTypes.func.isRequired,
    handleLeaveClick: PropTypes.func.isRequired,
    handleBidSubmit: PropTypes.func.isRequired,
    handleCardNumberSubmit: PropTypes.func.isRequired,
    handleDiceRollSubmit: PropTypes.func.isRequired
};

export default PlayerInterface;
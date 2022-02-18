import React from 'react';
import PropTypes from 'prop-types';
import Turn from '../molecules/Turn';

const PlayerInterface = ({isPlayerTurn, playerName, turnPlayerName, handleTurnClick}) => {
    return (
        <div>
            <Turn
                isPlayerTurn={isPlayerTurn}
                playerName={playerName}
                turnPlayerName={turnPlayerName}
                handleTurnClick={handleTurnClick}
            />
            <p>{`Welcome, ${playerName}! This is your main activity screen`}</p>
        </div>
    );
};

PlayerInterface.propTypes = {
    isPlayerTurn: PropTypes.bool.isRequired,
    playerName: PropTypes.string.isRequired,
    turnPlayerName: PropTypes.string.isRequired,
    handleTurnClick: PropTypes.func.isRequired
};

export default PlayerInterface;
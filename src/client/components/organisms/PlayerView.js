import React from 'react';
import PropTypes from 'prop-types';
import PlayerInterface from '../organisms/PlayerInterface';
import ReadyCheck from '../molecules/ReadyCheck';
import GameLog from '../molecules/GameLog';

const PlayerView = props => {
    const {
        playerData,
        gameData,
        handleChange,
        handleCheckClick,
        handleDecisionClick,
        handleLeaveClick,
        handleBidSubmit,
        handleCardNumberSubmit,
        handleDiceRollSubmit
    } = props;
    
    return (
        <div>
            {gameData.isGameStarted
                ? 
            <PlayerInterface
                {...playerData}    
                {...gameData}
                handleChange={handleChange}
                handleDecisionClick={handleDecisionClick}
                handleLeaveClick={handleLeaveClick}
                handleBidSubmit={handleBidSubmit}
                handleCardNumberSubmit={handleCardNumberSubmit}
                handleDiceRollSubmit={handleDiceRollSubmit}
                
            />
            :
            <ReadyCheck
                {...playerData}
                {...gameData}
                handleCheckClick={handleCheckClick}
            />}

            {playerData.error && <p>{playerData.error}</p>}

            <GameLog
                gameLog={gameData.gameLog}
            />
        </div>
    );
};

PlayerView.propTypes = {
    playerData: PropTypes.object.isRequired,
    gameData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleCheckClick: PropTypes.func.isRequired,
    handleDecisionClick: PropTypes.func.isRequired,
    handleLeaveClick: PropTypes.func.isRequired,
    handleBidSubmit: PropTypes.func.isRequired,
    handleCardNumberSubmit: PropTypes.func.isRequired,
    handleDiceRollSubmit: PropTypes.func.isRequired
};

export default PlayerView;
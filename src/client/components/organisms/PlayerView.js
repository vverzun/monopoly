import React from 'react';
import PropTypes from 'prop-types';
import PlayerInterface from '../organisms/PlayerInterface';
import ReadyCheck from '../molecules/ReadyCheck';

const PlayerView = props => {
    const {
        playerData,
        gameData,
        handleTurnClick,
        handleCheckClick
    } = props;

    return (
        <div>
            {gameData.isGameStarted
            ? 
            <PlayerInterface
                {...playerData}    
                {...gameData}
                handleTurnClick={handleTurnClick}
            />
            :
            <ReadyCheck
                {...playerData}
                {...gameData}
                handleCheckClick={handleCheckClick}
            />
            }
        </div>
    );
};

PlayerView.propTypes = {
    playerData: PropTypes.object.isRequired,
    gameData: PropTypes.object.isRequired,
    handleCheckClick: PropTypes.func.isRequired,
    handleTurnClick: PropTypes.func.isRequired
};

export default PlayerView;
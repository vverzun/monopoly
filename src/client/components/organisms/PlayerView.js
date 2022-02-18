import React from 'react';
import PropTypes from 'prop-types';
import PlayerInterface from '../organisms/PlayerInterface';
import ReadyCheck from '../molecules/ReadyCheck';

const PlayerView = ({playerName, isReady, readyPlayers, playersCount, isPlayerTurn, turnPlayerName, isGameStarted, handleCheckClick, handleTurnClick}) => {
    if (isPlayerTurn) console.log('asdasdasdasdas');
    return (
        <div>
            {isGameStarted
            ? 
            <PlayerInterface
                isPlayerTurn={isPlayerTurn}
                playerName={playerName}
                turnPlayerName={turnPlayerName}
                handleTurnClick={handleTurnClick}
            />
            :
            <ReadyCheck
                isReady={isReady}
                readyPlayers={readyPlayers}
                playersCount={playersCount}
                handleCheckClick={handleCheckClick}
            />
            }
        </div>
    );
};

PlayerView.propTypes = {
    playerName: PropTypes.string.isRequired,
    isReady: PropTypes.bool.isRequired,
    readyPlayers: PropTypes.number,
    playersCount: PropTypes.number,
    isPlayerTurn: PropTypes.bool,
    turnPlayerName: PropTypes.string,
    isGameStarted: PropTypes.bool,
    handleCheckClick: PropTypes.func.isRequired,
    handleTurnClick: PropTypes.func.isRequired
};

export default PlayerView;
import React from 'react';
import PropTypes from 'prop-types';
import PlayerStats from '../molecules/PlayerStats';
import ReadyCheck from '../molecules/ReadyCheck';

const PlayerInterface = ({isGameStarted, name, isReady, readyPlayers, players, handleClick}) => (
    <div>
        {isGameStarted
        ? 
        <PlayerStats
            name={name}
        />
        :
        <ReadyCheck
            isReady={isReady}
            readyPlayers={readyPlayers}
            players={players}
            handleClick={handleClick}
        />
        }
    </div>
);

PlayerInterface.propTypes = {
    name: PropTypes.string.isRequired,
    isReady: PropTypes.bool.isRequired,
    readyPlayers: PropTypes.number,
    players: PropTypes.number,
    handleClick: PropTypes.func.isRequired
};

export default PlayerInterface;
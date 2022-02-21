import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const Leaderboard = ({curPlayerName, players}) => {
    const sortedPlayers = players.sort((p1, p2) => p2.balance - p1.balance);

    return (
        <table>
            <caption>Leaderboard</caption>
            <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Balance</th>
            </tr>
            {sortedPlayers.map((player, position) => (
                <Player 
                    {...player}
                    position={position}    
                    curPlayerName={curPlayerName}    
                    key={player.id}
                />
            ))}
        </table>
    );
};

Leaderboard.propTypes = {
    curPlayerName: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Leaderboard;
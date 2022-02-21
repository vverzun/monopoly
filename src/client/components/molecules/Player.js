import React from 'react';
import PropTypes from 'prop-types';

const Player = ({curPlayerName, playerName, balance, position}) => {
    return (
        <tr>
            <td>{position + 1}</td>
            <td>{curPlayerName === playerName ? 'You' : playerName}</td>
            <td>{balance}</td>
        </tr>
    );
};

Player.propTypes = {
    curPlayerName: PropTypes.string.isRequired,
    playerName: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired
};

export default Player;
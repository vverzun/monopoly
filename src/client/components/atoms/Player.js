import React from 'react';
import PropTypes from 'prop-types';

const Player = ({name, balance, position}) => {
    return (
        <tr>
            <td>{position + 1}</td>
            <td>{name}</td>
            <td>{balance}</td>
        </tr>
    );
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired
};

export default Player;
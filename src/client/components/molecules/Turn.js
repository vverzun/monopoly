import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const Turn = ({isPlayerTurn, playerName, turnPlayerName, handleTurnClick}) => {
    return (
        <div>
            <Text
                text={isPlayerTurn ? `It is your turn, ${playerName}` : `It is ${turnPlayerName}'s Turn, hold on!`}
            />
            <Button
                text='End turn'
                isDisabled={isPlayerTurn}
                handleClick={handleTurnClick}
            />
        </div>
    );
};

Turn.propTypes = {
    isPlayerTurn: PropTypes.bool.isRequired,
    playerName: PropTypes.string.isRequired,
    turnPlayerName: PropTypes.string.isRequired,
    handleTurnClick: PropTypes.func.isRequired
};

export default Turn;
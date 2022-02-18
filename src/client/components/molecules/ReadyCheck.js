import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Text from '../atoms/Text'; 

const ReadyCheck = ({isReady, readyPlayers, players, handleClick}) => { 
    return (
        <div>
            <Text
                text={`Ready players: ${readyPlayers}/${players}`}
            />
            <Button
                text={isReady ? 'Cancel' : 'Ready'}
                handleClick={handleClick}
            />
        </div>
    );
};

ReadyCheck.propTypes = {
    isReady: PropTypes.bool.isRequired,
    readyPlayers: PropTypes.number,
    players: PropTypes.number,
    handleClick: PropTypes.func.isRequired
};

export default ReadyCheck;
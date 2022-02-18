import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Text from '../atoms/Text'; 

const ReadyCheck = ({isReady, readyPlayers, playersCount, handleCheckClick}) => { 
    return (
        <div>
            <Text
                text={`Ready players: ${readyPlayers}/${playersCount}`}
            />
            <Button
                text={isReady ? 'Cancel' : 'Ready'}
                isDisabled={true}
                handleClick={handleCheckClick}
            />
        </div>
    );
};

ReadyCheck.propTypes = {
    isReady: PropTypes.bool.isRequired,
    readyPlayers: PropTypes.number,
    playersCount: PropTypes.number,
    handleCheckClick: PropTypes.func.isRequired
};

export default ReadyCheck;
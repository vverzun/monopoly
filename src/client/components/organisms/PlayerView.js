import React from 'react';
import PropTypes from 'prop-types';
import PlayerInterface from '../organisms/PlayerInterface';
import ReadyCheck from '../molecules/ReadyCheck';

const PlayerView = props => {
    const {
        playerData,
        gameData,
        handleCheckClick,
        handleDecisionClick,
        handleBidChange,
        handleBidSubmit,
        handleLeaveClick
    } = props;
    
    return (
        <div>{
            gameData.isGameStarted
            ? 
            <PlayerInterface
                {...playerData}    
                {...gameData}
                handleDecisionClick={handleDecisionClick}
                handleBidChange={handleBidChange}
                handleBidSubmit={handleBidSubmit}
                handleLeaveClick={handleLeaveClick}
            />
            :
            <ReadyCheck
                {...playerData}
                {...gameData}
                handleCheckClick={handleCheckClick}
            />   
        }</div>
    );
};

PlayerView.propTypes = {
    playerData: PropTypes.object.isRequired,
    gameData: PropTypes.object.isRequired,
    handleCheckClick: PropTypes.func.isRequired,
    handleDecisionClick: PropTypes.func.isRequired,
    handleBidChange: PropTypes.func.isRequired,
    handleBidSubmit: PropTypes.func.isRequired,
    handleLeaveClick: PropTypes.func.isRequired
};

export default PlayerView;
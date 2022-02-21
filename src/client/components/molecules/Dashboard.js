import React from 'react';
import PropTypes from 'prop-types';
import Leaderboard from './Leaderboard';
import PropertyList from './PropertyList';

const Dashboard = ({curPlayerName, players, property}) => {
    return (
        <div>
            <Leaderboard
                curPlayerName={curPlayerName}
                players={players}
            />
            <PropertyList
                property={property}
            />
        </div>
    );
};

Dashboard.propTypes = {
    curPlayerName: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    property: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Dashboard;
import React from 'react';
import PropTypes from 'prop-types';
import Leaderboard from './Leaderboard';
import PropertyList from './PropertyList';

const Dashboard = ({players, property}) => {
    return (
        <div>
            <Leaderboard
                players={players}
            />
            <PropertyList
                property={property}
            />
        </div>
    );
};

Dashboard.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    property: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Dashboard;
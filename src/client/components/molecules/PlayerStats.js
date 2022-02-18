import React from 'react';
import PropTypes from 'prop-types';

const PlayerStats = ({name}) => (
    <div>
        {`THIS IS YOUR STATS, ${name}`}
    </div>
);

PlayerStats.propTypes = {
    name: PropTypes.string.isRequired
};

export default PlayerStats;
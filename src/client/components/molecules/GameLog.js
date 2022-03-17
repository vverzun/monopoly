import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';

const GameLog = ({gameLog}) => {
	return (
		<div>
			{gameLog.map((log) => (
				<Text
					text={log.message}
					key={log.id}
				/>
			))}
		</div>
	);
};

GameLog.propTypes = {
	gameLog: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GameLog;

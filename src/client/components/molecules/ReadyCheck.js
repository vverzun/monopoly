import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const ReadyCheck = (props) => {
	const {
		isReady,
		readyCount,
		playersCount,
		handleCheckClick,
	} = props;

	return (
		<div>
			<Text
				text={`Ready players: ${readyCount}/${playersCount}`}
			/>

			<Button
				text={isReady ? 'Cancel' : 'Ready'}
				handleClick={handleCheckClick}
			/>
		</div>
	);
};

ReadyCheck.propTypes = {
	isReady: PropTypes.bool.isRequired,
	readyCount: PropTypes.number.isRequired,
	playersCount: PropTypes.number.isRequired,
	handleCheckClick: PropTypes.func.isRequired,
};

export default ReadyCheck;

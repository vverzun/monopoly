import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const Prison = ({handlePrisonClick, freePrisonEscape}) => {
	return (
		<div>
			<Button
				text='Get out of prison'
				value='price'
				handleClick={handlePrisonClick}
			/>
			{!!freePrisonEscape &&
			<Button
				text='Escape for free'
				value='free'
				handleClick={handlePrisonClick}
			/>}
		</div>
	);
};

Prison.propTypes = {
	freePrisonEscape: PropTypes.number.isRequired,
	handlePrisonClick: PropTypes.func.isRequired,
};

export default Prison;

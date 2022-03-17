import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, isActive=true, value='', handleClick}) => {
	return (
		<button
			onClick={handleClick}
			value={value}
			disabled={!isActive}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	value: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};

export default Button;

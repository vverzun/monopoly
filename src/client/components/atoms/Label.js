import React from 'react';
import PropTypes from 'prop-types';

const Label = ({id, labelText}) => {
	return (
		<label htmlFor={id}>
			{labelText}
		</label>
	);
};

Label.propTypes = {
	id: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
};

export default Label;

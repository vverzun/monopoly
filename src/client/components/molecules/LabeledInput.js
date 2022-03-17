import React from 'react';
import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const LabeledInput = ({id, labelText, type, handleChange}) => {
	return (
		<div>
			<Label
				id={id}
				labelText={labelText}
			/>
			<Input
				id={id}
				type={type}
				handleChange={handleChange}
			/>
		</div>
	);
};

LabeledInput.propTypes = {
	id: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	handleChange: PropTypes.func,
};

export default LabeledInput;

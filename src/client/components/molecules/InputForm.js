import React from 'react';
import PropTypes from 'prop-types';
import Form from '../atoms/Form';
import LabeledInput from './LabeledInput';
import Input from '../atoms/Input';

const InputForm = ({id, labelText, handleChange, handleSubmit}) => {
	return (
		<Form handleSubmit={handleSubmit}>
			<LabeledInput
				id={id}
				labelText={labelText}
				type='text'
				handleChange={handleChange}
			/>
			<Input
				type='submit'
				value='Enter'
			/>
		</Form>
	);
};

InputForm.propTypes = {
	id: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;

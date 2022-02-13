import React from 'react';
import PropTypes from 'prop-types';
import Form from '../atoms/Form';
import LabeledInput from '../molecules/LabeledInput';
import Input from '../atoms/Input';

const AuthForm = ({handleSubmit, handleChange}) => {
    return (
        <Form handleSubmit={handleSubmit}>  
            <LabeledInput
                id='name'
                labelText='Hello! Enter your name:'
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

AuthForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default AuthForm;
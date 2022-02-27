import React from 'react';
import PropTypes from 'prop-types';

const Form = ({children, handleSubmit}) => {
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit();
        event.target.reset();
    }
    
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;
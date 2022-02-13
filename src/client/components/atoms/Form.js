import React from 'react';
import PropTypes from 'prop-types';

const Form = ({children, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;
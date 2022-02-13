import React from 'react';
import PropTypes from 'prop-types';

const Input = ({id, type, value, handleChange}) => {
    return (
        <input
            id={id}    
            type={type}
            value={value}
            onChange={handleChange}
        />   
    );
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func
};

export default Input;

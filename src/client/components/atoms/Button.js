import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, isActive, handleClick}) => {
    return (
        <button 
            onClick={handleClick}
            disabled={!isActive}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired
};

export default Button;
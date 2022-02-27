import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const Property = ({title}) => {
    return (
        <div>
            <Text
                text={title}
            />
        </div>
    );
};

Property.propTypes = {
    title: PropTypes.string.isRequired
};

export default Property;
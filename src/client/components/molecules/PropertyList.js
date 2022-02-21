import React from 'react';
import PropTypes from 'prop-types';
import Property from './Property';
import Text from '../atoms/Text';

const PropertyList = ({property}) => {
    return (
        <div>
            <Text
                text={property.length ? 'Property' : 'You have no property'}
            />

            {property.map(elem => (
                <Property 
                    {...elem}
                    key={elem.id}
                />
            ))}
        </div>
    );
};

PropertyList.propTypes = {
    property: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PropertyList;
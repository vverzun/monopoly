import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const PlayerDecision = ({decisionProperty, handleDecisionClick}) => {
    return (
        <div>
            <Text
                text={`Do you want to buy ${decisionProperty.title}?`}
            />
            <Button
                handleClick={handleDecisionClick}
                value={'Yes'}
                text='Yes'
            />
            <Button
                handleClick={handleDecisionClick}
                value={'No'}
                text='No'
            />
        </div>
    );
};

PlayerDecision.propTypes = {
    decisionProperty: PropTypes.object.isRequired,
    handleDecisionClick: PropTypes.func.isRequired
};

export default PlayerDecision;
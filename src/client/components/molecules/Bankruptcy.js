import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const Bankruptsy = ({balance, playerOnBankrupt}) => (
    <div>
        <Text
            text={`You owe ${balance}`}
        />
        <Button
            text={'I am BANKRUPT'}
            handleClick={playerOnBankrupt}
        />
    </div>
);

Bankruptsy.propTypes = {
    balance: PropTypes.number.isRequired,
    playerOnBankrupt: PropTypes.func.isRequired
};

export default Bankruptsy;
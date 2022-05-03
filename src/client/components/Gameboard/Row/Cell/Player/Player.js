import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import style from './Player.scss';

const Player = ({name}) => (
	<Box className={style.container}>
		{name}
	</Box>
);

Player.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Player;

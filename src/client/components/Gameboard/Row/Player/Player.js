import React from 'react';
import Box from '@material-ui/core/Box';
import style from './Player.scss';

const Player = ({name}) => (
	<Box className={style.container}>
		{name}
	</Box>
);

export default Player;

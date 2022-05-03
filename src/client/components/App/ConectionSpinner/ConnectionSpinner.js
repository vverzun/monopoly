import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import style from './ConnectionSpinner.scss';
import Typography from '@material-ui/core/Typography';

const ConnectionSpinner = ({playersCount, clientsCount, isConnection}) => (
	<Dialog className={style.connectionDialog} open={true}>
		<Box className={style.alertInfoBox}>
			<CircularProgress/>
			{!isConnection && <Typography>Connecting server...</Typography>}
			{isConnection && <Typography>Connection with server is set!</Typography>}
			{playersCount !== clientsCount &&
				<Typography>
					{`Waiting for players to connect the game: ${clientsCount}/${playersCount}`}
				</Typography>
			}
		</Box>
	</Dialog>
);

ConnectionSpinner.propTypes = {
	playersCount: PropTypes.number.isRequired,
	clientsCount: PropTypes.number.isRequired,
	isConnection: PropTypes.bool.isRequired,
};

export default ConnectionSpinner;

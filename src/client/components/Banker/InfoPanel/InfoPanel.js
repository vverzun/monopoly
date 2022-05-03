import React from 'react';
import PropTypes from 'prop-types';
import Leaderboard from './Leaderboard/Leaderboard';
import ReadyCheck from './ReadyCheck/ReadyCheck';
import History from './History/History';
import Box from '@material-ui/core/Box';
import style from './InfoPanel.scss';

const InfoPanel = ({start, logged}) => (
	<Box className={style.infoPanel}>
		{start && logged && <Leaderboard/>}
		{!start && logged && <ReadyCheck/>}
		{logged && <History/>}
	</Box>
);

InfoPanel.propTypes = {
	start: PropTypes.bool,
	logged: PropTypes.bool,
};

export default InfoPanel;

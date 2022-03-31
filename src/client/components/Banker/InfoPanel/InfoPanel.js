import React from 'react';
import Leaderboard from './Leaderboard/Leaderboard';
import ReadyCheck from './ReadyCheck/ReadyCheck';
import History from './History/History';
import Box from '@material-ui/core/Box';
import style from './style.scss';

const InfoPanel = ({start, logged}) => (
    <Box className={style.infoPanel}>
        {start && logged && <Leaderboard/>}
        {!start && logged && <ReadyCheck/>}
        {logged && <History/>}
    </Box>
);

export default InfoPanel;
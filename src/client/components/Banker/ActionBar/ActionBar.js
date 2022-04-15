import React from 'react';
import MoveChip from './MoveChip/MoveChip';
import Prison from './Prison/Prison';
import Property from './Property/Property';
import Box from '@material-ui/core/Box';
import style from './ActionBar.scss';

const ActionBar = ({start, logged}) => (
    <>
        {start && logged
        && 
        <Box className={style.actionBar}>
            <MoveChip/>
            <Prison/>
            <Property/>
        </Box>}
    </>
);

export default ActionBar;
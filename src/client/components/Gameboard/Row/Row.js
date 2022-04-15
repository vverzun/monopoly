import React from 'react';
import Box from '@material-ui/core/Box';
import style from './Row.scss';

const rowStyles = new Map([
    ['top', style.topRow],
    ['right', style.rightRow],
    ['bottom', style.bottomRow],
    ['left', style.leftRow],
]);

const Row = ({cells, type}) => (
    <Box className={rowStyles.get(type)}>
        {cells.map(cell => (
            <Box key={cell.id} className={style.cell}></Box>
        ))}
    </Box>
);

export default Row;
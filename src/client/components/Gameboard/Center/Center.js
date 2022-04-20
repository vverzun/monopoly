import React from 'react';
import CardDraw from './CardDraw/CardDraw';
import DiceRoll from './DiceRoll/DiceRoll';
import Box from '@material-ui/core/Box';
import style from './Center.scss';

const Center = () => (
    <Box className={style.container}>
        <CardDraw cardType='communityChest'/>
        <DiceRoll/>
        <CardDraw cardType='chance'/>
    </Box>
);

export default Center;
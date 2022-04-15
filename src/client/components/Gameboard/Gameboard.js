import React from 'react';
import Row from './Row/Row';
import DiceRoll from './DiceRoll/DiceRoll';
import Paper from '@material-ui/core/Paper';
import gameboard from '../../../lib/mock/gameboardMock.mjs';
import style from './Gameboard.scss';

const top = gameboard.slice(20, 31);
const right = gameboard.slice(31, 40);
const bottom = gameboard.slice(0, 11);
const left = gameboard.slice(11, 20);

const Gameboard = () => (
    <Paper className={style.container}>
        <Row cells={top} type={'top'}/>
        <div className={style.innerContainer}>
            <Row cells={left} type={'left'}/>
            <DiceRoll/>
            <Row cells={right} type={'right'}/>
        </div>
        <Row cells={bottom} type={'bottom'}/>
    </Paper>
);

export default Gameboard;
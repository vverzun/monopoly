import React from 'react';
import {useSelector} from 'react-redux';
import Row from './Row/Row';
import Center from './Center/Center';
import Paper from '@material-ui/core/Paper';
import style from './Gameboard.scss';
import gameboard from '../../../lib/mock/gameboardMock.mjs';

const Gameboard = () => {
    const playersPositions = useSelector(state => state.banker.playersPositions);
    const playersBuildings = useSelector(state => state.banker.playersBuildings);
    const boardWithPlayers = JSON.parse(JSON.stringify(gameboard));
    
    playersPositions.forEach(player => (
        boardWithPlayers[player.position].players.push(player))
    );

    playersBuildings.forEach(cell => {
        boardWithPlayers[cell.index][cell.building] = cell.amount;
    });
    
    return (
        <Paper className={style.container}>
            <Row cells={boardWithPlayers.slice(20, 31)} type={'top'}/>
            <div className={style.center}>
                <Row cells={boardWithPlayers.slice(11, 20)} type={'left'}/>
                <Center/>
                <Row cells={boardWithPlayers.slice(31, 40)} type={'right'}/>
            </div>
            <Row cells={boardWithPlayers.slice(0, 11)} type={'bottom'}/>
        </Paper>
    );
};

export default Gameboard;
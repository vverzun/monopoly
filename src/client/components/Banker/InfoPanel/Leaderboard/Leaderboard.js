import React, {useState, useMemo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import uuid from "uuid";

const Cell = withStyles(() => ({
    root: {
        textAlign: 'center'
    }, 
    head: {
        backgroundColor: '#000000',
        color: '#ffffff',
    }
}))(TableCell);

const Leaderboard = () => { 
    const {players} = useSelector(state => state.banker);
    const memoPlayers = useMemo(() => (
        players.sort((a, b) => b.balance - a.balance).map((player, i) => (
            <TableRow key={uuid.v4()}>
                <Cell>{i + 1}</Cell>
                <Cell>{player.name}</Cell>
                <Cell>${player.balance}</Cell>
            </TableRow>
        ))
    ), [players]);

    return (
        <TableContainer component={Paper} style={{width: '300px'}}>
        <Table>
            <TableHead>
            <TableRow>
                <Cell>Position</Cell>
                <Cell>Name</Cell>
                <Cell>Balance</Cell>
            </TableRow>
            </TableHead>
            <TableBody>
                {memoPlayers}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default Leaderboard;
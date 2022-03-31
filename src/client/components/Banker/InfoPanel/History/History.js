import React, {useMemo, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import style from './style.scss';
import uuid from 'uuid';

const Cell = withStyles(() => ({
    root: {
        textAlign: 'center',
    },
    head: {
        backgroundColor: '#000000',
        color: '#ffffff',
    },
    body: {
        fontSize: '1rem'
    }
}))(TableCell);

const History = () => {
    const {logs} = useSelector(state => state.logger);
    const box = useRef();
    const memoLogs = useMemo(() => (
        logs.map(log => (
            <TableRow key={uuid.v4()}>
                    <Cell>{log.time}</Cell>
                    <Cell>{log.message}</Cell>
            </TableRow>))
    ), [logs]);

    useEffect(() => {
        box.current.scrollTop = box.current.scrollHeight - box.current.clientHeight;
    }, [logs])

    return (
        <TableContainer ref={box} component={Paper} className={style.historyContainer}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <Cell>Time</Cell>
                    <Cell>Event</Cell>
                </TableRow>
            </TableHead>
            <TableBody>                
                {memoLogs}
            </TableBody>
        </Table>
        </TableContainer>
    )
};

export default History;
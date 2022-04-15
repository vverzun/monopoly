import React, {useMemo, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import style from './History.scss';
import uuid from 'uuid';

const History = () => {
    const {logs} = useSelector(state => state.logger);
    const box = useRef();
    const memoLogs = useMemo(() => (
        logs.map(log => (
            <TableRow key={uuid.v4()}>
                    <TableCell>{log.time}</TableCell>
                    <TableCell>{log.message}</TableCell>
            </TableRow>))
    ), [logs]);
    useEffect(() => {
        box.current.scrollTop = box.current.scrollHeight - box.current.clientHeight;
    }, [logs])

    return (
        <TableContainer ref={box} component={Paper} className={style.historyContainer}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow className={style.header}>
                        <TableCell>Time</TableCell>
                        <TableCell>Event</TableCell>
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
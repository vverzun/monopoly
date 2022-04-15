import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import style from './ReadyCheck.scss';
import {ready} from '../../../../request/request';

const ReadyCheck = () => {
    const {name} = useSelector(state => state.player);
    const {playersCount, readyCount} = useSelector(state => state.banker);
    const onReady = useCallback(() => ready(), []);
    
    return (
        <Paper className={style.container}>
            <Typography className={style.welcomeText}>
                Welcome, {name}! Press the button as soon as you are ready.
            </Typography>
            <Typography className={style.readyText}>
                Ready players: {readyCount}/{playersCount}
            </Typography>
            <Button variant='contained' onClick={onReady}>
                Ready
            </Button>
        </Paper>
    );
};

export default ReadyCheck;
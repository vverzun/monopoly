import React from 'react';
import {useSelector} from 'react-redux';
import ActionBar from './ActionBar/ActionBar';
import InfoPanel from './InfoPanel/InfoPanel';
import Input from './Input/Input';
import Auction from './Auction/Auction';
import Box from '@material-ui/core/Box';
import style from './Banker.scss';

const Banker = () => {
    const {start, logged} = useSelector(state => ({
        start: state.banker.isGameStarted,
        logged: state.player.isLoggedIn
    }));

    return (
        <Box className={style.container}>
            <InfoPanel start={start} logged={logged}/>
            <ActionBar start={start} logged={logged}/>
            <Input/>
            <Auction/>
        </Box>
    );
};

export default Banker;
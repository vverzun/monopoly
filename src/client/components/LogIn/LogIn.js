import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import style from './style.scss';
import {newPlayerJoin} from '../../request/request';

const LogIn = () => {
    const {isLoggedIn} = useSelector(state => state.player);
    const [name, setName] = useState('');
    const handleChange = useCallback((e) => setName(e.target.value), []);
    const onLogIn = useCallback(() => newPlayerJoin(name), [name]);

    return (
        <Dialog open={!isLoggedIn}>
            <Box className={style.container}>
                <DialogTitle>Log In</DialogTitle>
                <TextField className={style.input}
                    onChange={handleChange}
                    label='Name'
                    autoFocus
                />
                <Button className={style.button}
                    onClick={onLogIn}
                    variant='contained'>OK
                </Button>
            </Box>
        </Dialog>
    );
};

export default LogIn;
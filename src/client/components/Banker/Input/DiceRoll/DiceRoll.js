import React, {useState, useCallback} from 'react';  
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import style from './style.scss';
import {diceRoll} from '../../../../request/request';

const MoveChipDialog = ({isOpen}) => {
    const [number, setNumber] = useState('');
    const handleChange = useCallback((e) => setNumber(e.target.value), []);
    const handleDiceNumber = useCallback(() => diceRoll(number), [number]);

    return (
        <Dialog open={isOpen}>
            <Box className={style.container}>
                <DialogTitle>Dice roll number</DialogTitle>
                <TextField className={style.input}
                    onChange={handleChange}
                    label='Number'
                    variant='outlined'
                    size='small'
                    autoFocus
                />
                <DialogActions className={style.actions}>
                    <Button className={style.button}
                        onClick={handleDiceNumber}
                        variant='contained'>Submit
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default MoveChipDialog;
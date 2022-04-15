import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';  
import style from './MoveChipDialog.scss';

const MoveChipDialog = ({isOpen, handleOpen, handleChange, handleMove}) => (
    <Dialog open={isOpen} onClose={handleOpen}>
        <Box className={style.container}>
            <DialogTitle>Move chip</DialogTitle>
            <TextField className={style.input}
                onChange={handleChange}
                label='Cell'
                variant='outlined'
                size='small'
                autoFocus
            />
            <DialogActions className={style.actions}>
                <Button className={style.button}
                    onClick={handleOpen}
                    variant='contained'>Cancel
                </Button>
                <Button className={style.button}
                    onClick={handleMove}
                    variant='contained'>Submit
                </Button>
            </DialogActions>
        </Box>
    </Dialog>
);

export default MoveChipDialog;
import React, {useCallback, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import policeman from '../../../../../resources/policeman.png';
import style from './PrisonAlert.scss';

const PrisonAlert = () => {
    const {isPrisoner} = useSelector(state => state.player);
    const [isOpen, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
    useEffect(() => setOpen(isPrisoner), [isPrisoner]);
    
    return (
        <Dialog open={isOpen} onClose={handleOpen} className={style.dialog}>
            <IconButton onClick={handleOpen} className={style.closeIcon}>
                <CloseIcon fontSize='small'/>
            </IconButton>
            <Box className={style.alert}>
                <Typography className={style.text}>
                    YOU ARE IN THE PRISON
                </Typography>
                <img alt='policeman' src={policeman} className={style.image}/>
            </Box>
        </Dialog>
    );
};

export default PrisonAlert;
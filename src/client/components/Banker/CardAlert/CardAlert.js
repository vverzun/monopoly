import React, {useState, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import chanceBanker from '../../../resources/chanceBanker.png';
import communityBanker from '../../../resources/communityBanker.png';
import style from './CardAlert.scss';

const CardAlert = () => {
    const card = useSelector(state => state.player.card);
    const [isOpen, setOpen] = useState(Boolean(card));
    const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
    useEffect(() => setOpen(Boolean(card)), [card]);

    return (
        <Dialog open={isOpen} className={style.container}>
            <IconButton onClick={handleOpen} className={style.closeIcon}>
                <CloseIcon fontSize='small'/>
            </IconButton>
        
            <Box className={style.card}>
                <Typography className={style.header}>
                    {card.origin === 'chance' ? 'CHANCE' : 'COMMUNITY CHEST'}
                </Typography>
                <Box className={style.textContainer}>
                    <Typography>
                        {card.text}
                    </Typography>
                    <img alt='banker' src={card.origin === 'chance' ? chanceBanker : communityBanker}/>
                </Box>
            </Box>
        </Dialog>
    );
};

export default CardAlert;
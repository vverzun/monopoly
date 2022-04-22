import React, {useState, useMemo, useCallback} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import style from './CardAction.scss';
import {buyBuilding, sellBuilding, mortgage} from '../../../../request/request';

const options = [
    {
        text: 'Buy house',
        building: 'house',
        action: buyBuilding 
    },
    {
        text: 'Sell house',
        building: 'house',
        action: sellBuilding
    },
    {
        text: 'Buy hotel',
        building: 'hotel',
        action: buyBuilding
    },
    {
        text: 'Sell hotel',
        building: 'hotel',
        action: sellBuilding,
    },
    {
        text: 'Mortgage',
        action: mortgage
    },
];

const CardAction = ({card}) => {
    const [anchor, setAnchor] = useState(null);
    const isOpen = Boolean(anchor);

    const handleOpen = useCallback((e) => setAnchor(e.currentTarget), []);
    const handleClose = useCallback(() => setAnchor(null), []);
    const handleAction = useCallback((building, action) => () => {
        action(card.id, building);
    }, []);
    const memoOptions = useMemo(() => 
        (card.type === 'street' ? options : options.slice(-1)).map((option) => (
            <MenuItem key={option.text} onClick={handleAction(option.building, option.action)}>
                {option.text}
            </MenuItem>
    )), []);

    return (
        <div className={style.cardAction}>
            <IconButton size='small' onClick={handleOpen}>
                <MoreVertIcon fontSize='small'/>
            </IconButton>
            
            <Menu open={isOpen} onClose={handleClose} anchorEl={anchor}
                keepMounted>
                {memoOptions}
            </Menu>
        </div>
    );
};

export default CardAction;
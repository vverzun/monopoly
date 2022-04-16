import React, {useState, useCallback} from 'react';
import Button from '@material-ui/core/Button';
import MoveChipDialog from './MoveChipDialog/MoveChipDialog';  
import {boardMove} from '../../../../request/request';

const MoveChip = () => {
    const [cell, setCell] = useState('');
    const [isOpen, setOpen] = useState(false);
    const handleChange = useCallback((e) => setCell(e.target.value), []);
    const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
    const handleMove = useCallback(() => {
        boardMove(+cell);
        handleOpen();
    }, [cell]);
    
    return (
        <div>
            <Button onClick={handleOpen} variant='contained'>
                Move chip
            </Button>
            <MoveChipDialog
                isOpen={isOpen}
                handleOpen={handleOpen}
                handleChange={handleChange}
                handleMove={handleMove}
            />
        </div>
    );
};

export default MoveChip;
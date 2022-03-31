import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import PrisonAlert from './PrisonAlert/PrisonAlert';
import PrisonDialog from './PrisonDialog/PrisonDialog';
import Button from '@material-ui/core/Button';
import {escapePrison} from '../../../../request/request';

const Prison = () => {
    const {isPrisoner} = useSelector(state => state.player);
    const [isOpen, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
    const handleEscape = useCallback((e) => {
        escapePrison(e.currentTarget.value);
        setOpen(false);
    }, []);

    return (
        <div>
            <PrisonAlert/>
            <Button onClick={handleOpen}
                disabled={!isPrisoner}
                variant='contained'>Prison
            </Button>
            <PrisonDialog
                isOpen={isOpen}
                handleOpen={handleOpen}
                handleEscape={handleEscape}
            />
        </div>
    );
};

export default Prison;
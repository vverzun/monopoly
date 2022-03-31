import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import PropertyDialog from './PropertyDialog/PropertyDialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Property = () => {
    const {property} = useSelector(state => state.player);
    const [isOpen, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

    return (
        <Box>
            <Button onClick={handleOpen}
                disabled={!property.length}
                variant='contained'>Property
            </Button>
            <PropertyDialog
                isOpen={isOpen}
                handleOpen={handleOpen}
            />
        </Box>
    );
};

export default Property;
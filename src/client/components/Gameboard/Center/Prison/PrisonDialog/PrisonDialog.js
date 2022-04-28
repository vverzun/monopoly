import React from 'react';
import {useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import style from './PrisonDialog.scss';

const PrisonDialog = ({isOpen, handleOpen, handleEscape}) => {
	const {freePrisonEscape} = useSelector((state) => state.player);

	return (
		<Dialog open={isOpen} onClose={handleOpen} className={style.dialog}>
			<IconButton onClick={handleOpen} className={style.closeIcon}>
				<CloseIcon fontSize='small'/>
			</IconButton>
			<Box className={style.escapeContainer}>
				<DialogTitle>Choose escape type</DialogTitle>
				<DialogContent>
					<Button className={style.button}
						onClick={handleEscape}
						value='price'
						variant='contained'>Escape for $50
					</Button>
					<Button
						onClick={handleEscape}
						value='free'
						variant='contained'
						disabled={!freePrisonEscape}>Use 'Free escape' card
					</Button>
				</DialogContent>
			</Box>
		</Dialog>
	);
};

export default PrisonDialog;

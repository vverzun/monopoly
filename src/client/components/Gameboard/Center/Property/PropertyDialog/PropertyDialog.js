import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import Card from '../../../../Banker/Card/Card';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import style from './PropertyDialog.scss';
import uuid from 'uuid';

const PropertyDialog = ({isOpen, handleOpen}) => {
	const {property} = useSelector((state) => state.player);

	const memoProperty = useMemo(() => (
		property.map((card) => (
			<Card key={uuid.v4()} card={card}/>
		))
	), [property]);

	return (
		<Dialog open={isOpen} onClose={handleOpen} className={style.dialog}>
			<IconButton onClick={handleOpen} className={style.closeIcon}>
				<CloseIcon fontSize='small'/>
			</IconButton>
			<Box className={style.container}>
				<DialogTitle>My property</DialogTitle>
				<Box className={style.propertyList}>
					{memoProperty}
				</Box>
			</Box>
		</Dialog>
	);
};

export default PropertyDialog;

import React, {useState, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import style from './ErrorAlert.scss';

const ErrorAlert = () => {
	const {error} = useSelector((state) => state.player);
	const [isOpen, setOpen] = useState(false);
	const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	useEffect(() => setOpen(Boolean(error)), [error]);

	return (
		<Collapse in={isOpen} className={style.error}>
			<Alert severity='error' action={
				<IconButton size='small'onClick={handleOpen}>
					<CloseIcon/>
				</IconButton>}>
				{error}
			</Alert>
		</Collapse>);
};

export default ErrorAlert;

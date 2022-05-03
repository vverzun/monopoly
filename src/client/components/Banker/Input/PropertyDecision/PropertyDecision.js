import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import style from './PropertyDecision.scss';
import {propertyDecision} from '../../../../request/request';

const PropertyDecision = ({isOpen}) => {
	const {holdProperty} = useSelector((state) => state.banker);

	const handleDecision = useCallback((e) => {
		propertyDecision(e.currentTarget.value);
	}, []);

	return (
		<Dialog open={isOpen}>
			<Box className={style.container}>
				<DialogTitle>Property decision</DialogTitle>
				<Card card={holdProperty}/>
				<Typography className={style.price}>Price: ${holdProperty.price}</Typography>
				<DialogActions className={style.actions}>
					<Button
						onClick={handleDecision}
						variant='contained'
						value='buy'>Buy
					</Button>
					<Button
						onClick={handleDecision}
						variant='contained'
						value='auction'>Auction
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

PropertyDecision.propTypes = {
	isOpen: PropTypes.bool,
};

export default PropertyDecision;

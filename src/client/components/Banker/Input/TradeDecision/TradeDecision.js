import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import TradeItemBox from '../../../Gameboard/Center/Trade/TradeDialog/TradeItemBox/TradeItemBox';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import style from './TradeDecision.scss';
import {tradeDecision} from '../../../../request/request';

const TradeDecision = ({isOpen}) => {
	const tradeOffer = useSelector((state) => state.player.tradeOffer);
	const handleDecision = useCallback((e) => {
		tradeDecision(e.currentTarget.value);
	}, []);

	return (
		<Dialog open={isOpen}>
			<Box className={style.container}>
				<Typography className={style.title}>Do you accept the trade?</Typography>
				<Box className={style.itemBoxContainer}>
					<TradeItemBox
						type='tradeResponse'
						captionText={'You\'ll lose:'}
						tradeItems={Object.keys(tradeOffer.partner.items)}
						money={tradeOffer.partner.money}
					/>
					<TradeItemBox
						type='tradeResponse'
						captionText={'You\'ll get:'}
						tradeItems={Object.keys(tradeOffer.player.items)}
						money={tradeOffer.player.money}
					/>
				</Box>
				<DialogActions className={style.actions}>
					<Button onClick={handleDecision}
						variant='contained'
						value='accept'>
                        Accept
					</Button>
					<Button onClick={handleDecision}
						variant='contained'
						value='reject'>
                        Reject
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

TradeDecision.propTypes = {
	isOpen: PropTypes.bool,
};

export default TradeDecision;

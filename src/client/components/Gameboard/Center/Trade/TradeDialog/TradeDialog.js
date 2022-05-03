import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import SelectTradePartner from './SelectTradePartner/SelectTradePartner';
import TradeItemBox from './TradeItemBox/TradeItemBox';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import style from './TradeDialog.scss';

const TradeDialog = (props) => {
	const {
		isOpen,
		tradePartner,
		onDialogOpen,
		onItemChange,
		onPartnerChange,
		onOfferTrade,
	} = props;
	const property = useSelector((state) => state.player.property);
	const playersProperties = useSelector((state) => state.banker.playersProperties);
	const tradePartnerItems = useMemo(() => (
		playersProperties.filter((cell) => cell.owner === tradePartner)
	), [tradePartner]);

	return (
		<Dialog open={isOpen} onClose={onDialogOpen} className={style.dialog}>
			<IconButton onClick={onDialogOpen} className={style.closeIcon}>
				<CloseIcon fontSize='small'/>
			</IconButton>
			<Box className={style.container}>
				<Typography className={style.title}>Trade with:</Typography>
				<SelectTradePartner
					tradePartner={tradePartner}
					onPartnerChange={onPartnerChange}
				/>
				<Box className={style.tradeContainer}>
					<TradeItemBox
						type='tradeRequest'
						captionText='What can you offer?'
						tradeItems={property}
						onItemSelect={onItemChange('player', 'items')}
						onMoneyChange={onItemChange('player', 'money')}
					/>
					<TradeItemBox
						type='tradeRequest'
						captionText='What do you want?'
						tradeItems={tradePartnerItems}
						onItemSelect={onItemChange('partner', 'items')}
						onMoneyChange={onItemChange('partner', 'money')}
					/>
				</Box>
				<Button className={style.submit}
					variant='contained'
					onClick={onOfferTrade}>
                    SUBMIT
				</Button>
			</Box>
		</Dialog>
	);
};

TradeDialog.propTypes = {
	isOpen: PropTypes.bool,
	tradePartner: PropTypes.string,
	onDialogOpen: PropTypes.func.isRequired,
	onItemChange: PropTypes.func.isRequired,
	onPartnerChange: PropTypes.func.isRequired,
	onOfferTrade: PropTypes.func.isRequired,
};

export default TradeDialog;

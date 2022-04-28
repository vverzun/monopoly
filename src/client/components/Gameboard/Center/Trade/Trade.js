import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import TradeDialog from './TradeDialog/TradeDialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import style from './Trade.scss';
import {offerTrade} from '../../../../request/request';

const Trade = () => {
	const property = useSelector((state) => state.player.property);
	const [isOpen, setOpen] = useState(false);
	const [tradePartner, setTradePartner] = useState('');
	const [tradeItems, setTradeItems] = useState({
		player: {
			items: {},
			money: 0,
		},
		partner: {
			items: {},
			money: 0,
		},
	});
	const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

	const handleItemChange = useCallback((person, key) => (e) => {
		e.persist();
		setTradeItems((prev) => ({
			...prev,
			[person]: {
				...prev[person],
				[key]: key === 'money' ? parseInt(e.target.value) : {
					...prev[person].items,
					[e.currentTarget.name]: e.currentTarget.checked,
				},
			},
		}));
	}, [tradeItems]);

	const handlePartnerChange = useCallback((event) => {
		setTradePartner(event.target.value);
	}, [tradePartner]);

	const handleOfferTrade = useCallback(() => {
		offerTrade({...tradeItems, offerTo: tradePartner});
		setOpen(false);
	}, [tradeItems, tradePartner]);

	return (
		<Box>
			<Button onClick={handleOpen}
				className={style.tradeButton}
				disabled={!property.length}
				variant='contained'>
                Trade
			</Button>
			<TradeDialog
				isOpen={isOpen}
				tradePartner={tradePartner}
				onDialogOpen={handleOpen}
				onPartnerChange={handlePartnerChange}
				onItemChange={handleItemChange}
				onOfferTrade={handleOfferTrade}
			/>
		</Box>
	);
};

export default Trade;

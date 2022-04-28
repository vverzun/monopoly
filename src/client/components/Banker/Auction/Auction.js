import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import Card from '../Card/Card';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './Auction.scss';
import {leaveAuction, bid} from '../../../request/request';

const Auction = () => {
	const {isAuction} = useSelector((state) => state.player);
	const {lot, highestBid, winner} = useSelector((state) => state.auction);
	const [number, setBid] = useState('');
	const handleChange = useCallback((e) => setBid(e.target.value), []);
	const handlePlaceBid = useCallback(() => bid(number), [number]);
	const handleLeave = useCallback(() => leaveAuction(), []);

	return (
		<Dialog open={isAuction}>
			<Box className={style.container}>
				<DialogTitle>Auction</DialogTitle>
				<Box className={style.lotInfo}>
					<Box className={style.lot}>
						<Card card={lot}/>
					</Box>
					<Box className={style.info}>
						<Typography>Lot value: ${lot.price}
						</Typography>
						<Typography>Highest bid: ${highestBid}
						</Typography>
						<Typography
							className={style.winner}>Winner: {winner.name}
						</Typography>
						<Box className={style.actions}>
							<TextField
								label='Bid'
								variant='outlined'
								onChange={handleChange}
							/>
							<Button
								onClick={handlePlaceBid}
								variant='contained'>Bid
							</Button>
						</Box>
					</Box>
				</Box>
				<Button onClick={handleLeave} variant='contained'>
                    Leave
				</Button>
			</Box>
		</Dialog>
	);
};

export default Auction;

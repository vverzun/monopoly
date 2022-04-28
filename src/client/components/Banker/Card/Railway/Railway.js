import React from 'react';
import CardAction from '../CardAction/CardAction';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import train from '../../../../resources/train.png';
import style from './Railway.scss';

const Railway = ({card}) => (
	<Card className={style.card}>
		<CardAction card={card}/>
		<Box className={style.cardContainer}>
			<Box className={style.cardHeader}>
				<Box className={style.imageContainer}>
					<img className={style.image} alt='train' src={train}/>
				</Box>
				<Typography className={style.title}>{card.title}</Typography>
			</Box>
			<Box className={style.cardBody}>
				<Box>Rent</Box>
				<Box>${card.rent[0]}</Box><br/>
				<Box>If 2 railroads are owned</Box>
				<Box>${card.rent[1]}</Box><br/>
				<Box>If 3 railroads are owned</Box>
				<Box>${card.rent[2]}</Box><br/>
				<Box>If 4 railroads are owned</Box>
				<Box>${card.rent[3]}</Box><br/>
			</Box>
		</Box>
	</Card>
);

export default Railway;

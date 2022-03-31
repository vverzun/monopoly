import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import train from '../../../../resources/train.png';
import style from './style';

const Railway = ({card}) => (
	<Card style={{minWidth: '200px', minHeight: '280px'}}>
		<Box style={style.cardContainer}>
			<Box style={style.cardHeader}>
				<img style={{maxWidth: '50%'}} alt='train' src={train}/>
				<Typography style={{fontSize: '1rem', textAlign: 'center'}}>{card.title}</Typography>
			</Box>
			<Box style={style.cardBody}>
				<Box style={style.left}>Rent</Box>
				<Box style={style.right}>${card.rent[0]}</Box><br/>
				<Box style={style.left}>If 2 railroads are owned</Box>
				<Box style={style.right}>${card.rent[1]}</Box><br/>
				<Box style={style.left}>If 3 railroads are owned</Box>
				<Box style={style.right}>${card.rent[2]}</Box><br/>
				<Box style={style.left}>If 4 railroads are owned</Box>
				<Box style={style.right}>${card.rent[3]}</Box><br/>
			</Box>
		</Box>
	</Card>
);

export default Railway;
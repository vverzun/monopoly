import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import style from './Street.scss';

const Street = ({card}) => (
	<Card className={style.card}>
		<Box className={style.cardContainer}>
			<Box className={style.cardHeader} style={{backgroundColor: card.color}}>
				<Typography className={style.caption}>TITLE DEED</Typography>
				<Typography className={style.title}>{card.title}</Typography>
			</Box>
			<Box className={style.cardBody}>
				<Box>Rent</Box>
				<Box>${card.rent}</Box><br/>
				<Box>Rent with color set</Box>
				<Box>${card.rent * 2}</Box><br/>
				<Box>Rent with 1 house</Box>
				<Box>${card.houseRent[0]}</Box><br/>
				<Box>Rent with 2 house</Box>
				<Box>${card.houseRent[1]}</Box><br/>
				<Box>Rent with 3 house</Box>
				<Box>${card.houseRent[2]}</Box><br/>
				<Box>Rent with 4 house</Box>
				<Box>${card.houseRent[3]}</Box><br/>
				<Box>Rent with hotel</Box>
				<Box>${card.hotelRent}</Box><br/>
			</Box>
			<Box className={style.cardFooter}>
				<Box>Houses cost</Box>
				<Box>${card.buildingPrice}</Box><br/>
				<Box>Hotel cost</Box>
				<Box>${card.buildingPrice}</Box><br/>
				<Box></Box>
				<Box>(plus 4 houses)</Box><br/>
			</Box>
		</Box>
	</Card>
);

export default Street;
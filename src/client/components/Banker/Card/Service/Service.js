import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import bulb from '../../../../resources/bulb.png';
import tap from '../../../../resources/tap.png';
import style from './Service.scss';

const Service = ({card}) => (
	<Card className={style.card}>
		<Box className={style.cardContainer}>
			<Box className={style.cardHeader}>
				<Box className={style.imageContainer}>
					<img alt='service logo' className={style.image}
						src={card.title === 'WATER WORKS' ? tap : bulb}
					/>
				</Box>
				<Typography className={style.title}>{card.title}</Typography>
			</Box>
			<Box>
				<Typography className={style.text}>
					If one Utility is owned, rent is 4 times amount shown on dice.
				</Typography><br/>
				<Typography className={style.text}>
					If both Utilities are owned, rent is 10 times amount shown on dice.
				</Typography>
			</Box>
		</Box>
	</Card>
);

export default Service;
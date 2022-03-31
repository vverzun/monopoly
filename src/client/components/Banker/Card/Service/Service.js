import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import bulb from '../../../../resources/bulb.png';
import tap from '../../../../resources/tap.png';
import style from './style';

const Service = ({card}) => (
	<Card style={{minWidth: '200px', minHeight: '280px'}}>
		<Box style={style.cardContainer}>
			<Box style={style.cardHeader}>
				<img
					alt='service logo'
					style={card.title === 'WATER WORKS' ? style.tap : style.bulb}
					src={card.title === 'WATER WORKS' ? tap : bulb}
				/>
				<Typography style={{fontSize: '1rem', textAlign: 'center'}}>{card.title}</Typography>
			</Box>
			<Box style={style.cardBody}>
				<Typography style={{fontSize: '0.75rem', textAlign: 'center'}}>
					If one Utility is owned, rent is 4 times amount shown on dice.
				</Typography><br/>
				<Typography style={{fontSize: '0.75rem', textAlign: 'center'}}>
					If both Utilities are owned, rent is 10 times amount shown on dice.
				</Typography>
			</Box>
		</Box>
	</Card>
);

export default Service;
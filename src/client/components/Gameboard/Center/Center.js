import React from 'react';
import CardDraw from './CardDraw/CardDraw';
import DiceRoll from './DiceRoll/DiceRoll';
import Prison from './Prison/Prison';
import Property from './Property/Property';
import Trade from './Trade/Trade';
import MoveChip from './MoveChip/MoveChip';
import Box from '@material-ui/core/Box';
import style from './Center.scss';

const Center = () => (
	<Box className={style.container}>
		<CardDraw cardType='communityChest'/>
		<Box className={style.actionPanel}>
			<DiceRoll/>
			<Prison/>
			<Property/>
			<Trade/>
			<MoveChip/>
		</Box>
		<CardDraw cardType='chance'/>
	</Box>
);

export default Center;

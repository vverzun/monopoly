import React from 'react';
import Player from './Player/Player';
import Box from '@material-ui/core/Box';
import style from './Row.scss';
import house from '../../../resources/house.png';
import hotel from '../../../resources/hotel.png';
import uuid from 'uuid';

const rowStyles = new Map([
	['top', style.topRow],
	['right', style.rightRow],
	['bottom', style.bottomRow],
	['left', style.leftRow],
]);
const Buildings = ({cell}) => {
	const nodes = [];

	if (cell.house) {
		for (let i = 0; i < cell.house; i++) {
			nodes.push(<img key={uuid.v4()} alt='house' src={house}/>);
		}
	} else if (cell.hotel) {
		nodes.push(<img key={uuid.v4()} alt='hotel' src={hotel}/>);
	};
	return (
		<Box>
			{nodes}
		</Box>
	);
};

const Row = ({cells, type}) => (
	<Box className={rowStyles.get(type)}>
		{cells.map((cell) => (
			<Box key={cell.id} className={style.cell}>
				<Box className={style.cellHeader}>
					<Buildings cell={cell}/>
				</Box>
				<Box className={style.cellBody}>
					{cell.players.map((player) => (
						<Player
							key={player.id}
							name={player.name}
						/>
					))}
				</Box>
			</Box>
		))}
	</Box>
);

export default Row;
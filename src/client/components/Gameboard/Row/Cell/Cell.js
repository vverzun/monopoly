import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Buildings from './Buildings/Buildings';
import Player from './Player/Player';
import style from './Cell.scss';

const Cell = ({players, house, hotel}) => {
	const memoPlayers = useMemo(() => (
		players.map((player) => (
			<Player
				key={player.id}
				name={player.name}
			/>
		))
	), [players]);

	return (
		<Box className={style.cell}>
			<Box className={style.cellHeader}>
				<Buildings house={house} hotel={hotel}/>
			</Box>
			<Box className={style.cellBody}>
				{memoPlayers}
			</Box>
		</Box>
	);
};

Cell.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object),
	house: PropTypes.number,
	hotel: PropTypes.number,
};

export default Cell;

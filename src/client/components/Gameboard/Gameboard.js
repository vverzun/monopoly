import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import Row from './Row/Row';
import Center from './Center/Center';
import Paper from '@material-ui/core/Paper';
import style from './Gameboard.scss';

const Gameboard = () => {
	const gameboard = useSelector((state) => state.banker.gameboard);
	const playersPositions = useSelector((state) => state.banker.playersPositions);
	const playersBuildings = useSelector((state) => state.banker.playersBuildings);

	const memoBoard = useMemo(() => {
		const updatedBoard = JSON.parse(JSON.stringify(gameboard));
		playersPositions.forEach((player) => (
			updatedBoard[player.position].players.push(player)),
		);

		playersBuildings.forEach((cell) => {
			updatedBoard[cell.index][cell.building] = cell.amount;
		});

		return updatedBoard;
	}, [playersPositions, playersBuildings]);

	return (
		<Paper className={style.container}>
			<Row cells={memoBoard.slice(20, 31)} type={'top'}/>
			<div className={style.center}>
				<Row cells={memoBoard.slice(11, 20)} type={'left'}/>
				<Center/>
				<Row cells={memoBoard.slice(31, 40)} type={'right'}/>
			</div>
			<Row cells={memoBoard.slice(0, 11)} type={'bottom'}/>
		</Paper>
	);
};

export default Gameboard;

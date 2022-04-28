import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import style from './Leaderboard.scss';
import uuid from 'uuid';

const Leaderboard = () => {
	const {players} = useSelector((state) => state.banker);
	const memoPlayers = useMemo(() => (
		players.sort((a, b) => b.balance - a.balance).map((player, i) => (
			<TableRow key={uuid.v4()}>
				<TableCell>{i + 1}</TableCell>
				<TableCell>{player.name}</TableCell>
				<TableCell>${player.balance}</TableCell>
			</TableRow>
		))
	), [players]);

	return (
		<TableContainer component={Paper} className={style.container}>
			<Table>
				<TableHead>
					<TableRow className={style.header}>
						<TableCell>Position</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Balance</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{memoPlayers}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Leaderboard;

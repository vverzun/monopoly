import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from './SelectTradePartner.scss';
import uuid from 'uuid';

const SelectTradePartner = ({tradePartner, onPartnerChange}) => {
	const players = useSelector((state) => state.banker.players.filter((player) => (
		player.id !== state.player.id
	)));
	const memoPlayers = useMemo(() => (
		players.map((player) => (
			<MenuItem key={uuid.v4()} value={player.id}>
				{player.name}
			</MenuItem>
		))
	), [players]);

	return (
		<Select className={style.selectTradePartner}
			onChange={onPartnerChange}
			value={tradePartner}>
			{memoPlayers}
		</Select>
	);
};

export default SelectTradePartner;

import React from 'react';
import {useSelector} from 'react-redux';
import InfoPanel from './InfoPanel/InfoPanel';
import CardAlert from './CardAlert/CardAlert';
import Input from './Input/Input';
import Auction from './Auction/Auction';
import Box from '@material-ui/core/Box';
import style from './Banker.scss';

const Banker = () => {
	const start = useSelector((state) => state.banker.isGameStarted);
	const logged = useSelector((state) => state.player.isLoggedIn);

	return (
		<Box className={style.container}>
			<InfoPanel start={start} logged={logged}/>
			<CardAlert/>
			<Input/>
			<Auction/>
		</Box>
	);
};

export default Banker;

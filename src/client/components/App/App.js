import ReconnectingWebSocket from 'reconnecting-websocket';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import ConnectionSpinner from './ConectionSpinner/ConnectionSpinner';
import LogIn from '../LogIn/LogIn';
import Gameboard from '../Gameboard/Gameboard';
import Banker from '../Banker/Banker';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import Box from '@material-ui/core/Box';
import monopolyLogo from '../../resources/monopolyLogo.png';
import style from './App.scss';
import initWebsocket from '../../utils/initWebsocket';

export const ws = new ReconnectingWebSocket('ws://localhost:3030');

const App = () => {
	const isConnection = useSelector((state) => state.banker.isConnection);
	const playersCount = useSelector((state) => state.banker.playersCount);
	const clientsCount = useSelector((state) => state.banker.clientsCount);
	const isGameStarted = useSelector((state) => state.banker.isGameStarted);
	const shouldSpinnerRender = (isGameStarted && (playersCount !== clientsCount)) || !isConnection;

	useEffect(() => {
		initWebsocket();

		return () => {
			ws.close();
		};
	}, []);

	return (
		<Box className={style.container}>
			<img className={style.logo} src={monopolyLogo} alt='monopoly logo'/>
			{shouldSpinnerRender &&
				<ConnectionSpinner
					playersCount={playersCount}
					clientsCount={clientsCount}
					isConnection={isConnection}
				/>
			}
			{!shouldSpinnerRender &&
				<>
					<LogIn/>
					<Box className={style.interface}>
						<Gameboard/>
						<Banker/>
						{/* <button onClick={() => localStorage.clear()}>Clear</button> */}
					</Box>
					<ErrorAlert/>
				</>
			}

		</Box>
	);
};

export default App;

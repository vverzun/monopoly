import React, {useEffect} from 'react';
import LogIn from '../LogIn/LogIn';
import Banker from '../Banker/Banker';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import Box from '@material-ui/core/Box';
import monopolyLogo from '../../resources/monopolyLogo.png';
import style from './style.scss';
import initWebsocket from '../../utils/initWebsocket';

export const ws = new WebSocket('ws://localhost:3030');

const App = () => {
    useEffect(() => {
        initWebsocket();

        return () => {
            ws.close()
        };
    }, []);

    return (
        <Box className={style.container}>
            <img className={style.logo} src={monopolyLogo} alt='monopoly logo'/>
            <LogIn/>
            <Banker/>
            <ErrorAlert/>
        </Box>
    );
};

export default App;
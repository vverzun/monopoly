import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import './style.scss';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Kabel', 'sans-serif'].join(','),
        fontSize: 20
    }
});
    
export const store = createStore(rootReducer);

const Main = () => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
);

ReactDOM.render(<Main/>, document.getElementById('root'));

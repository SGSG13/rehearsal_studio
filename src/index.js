import React from 'react';
import {render} from 'react-dom';
import store from './store'
import {Provider} from 'react-redux'
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.sass';
injectTapEventPlugin();


render(
    <Provider store = {store}>
        <MuiThemeProvider>
            <App  />
        </MuiThemeProvider>
    </Provider>, document.getElementById('container')
);
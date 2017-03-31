import React from 'react';
import {render} from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider} from 'react-redux';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {store} from './store';
import {BASE_URL} from './constants';

//Styles
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-material.css';

require('./favicon.ico');


injectTapEventPlugin();

const appHistory = useRouterHistory(createBrowserHistory)({
  basename: BASE_URL
});

render(
  <Provider store={store}>
    <Router routes={routes} history={appHistory}/>
  </Provider>, document.getElementById('app')
);

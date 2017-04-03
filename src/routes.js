import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import DashboardPage from './containers/DashboardPage';
import ExamplePage from './containers/ExamplePage';

export default (
  <Route>

    <Route path="/" component={App}>
      <IndexRoute component={DashboardPage} />
      <Route path="/example-page" component={ExamplePage} />
      <Route path="*" component={NotFoundPage}/>
    </Route>

  </Route>
);

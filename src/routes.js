import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import DashboardPage from './containers/DashboardPage';
import ExamplePage from './containers/ExamplePage';
import CadastroPessoaPage from './containers/CadastroPessoaPage';


export default (
  <Route>

    <Route path="/" component={App}>
      <IndexRoute component={DashboardPage} />
      <Route path="/example-page" component={ExamplePage} />
      <Route path="/cadastro-pessoa-page" component={CadastroPessoaPage} />
      <Route path="*" component={NotFoundPage}/>
    </Route>

  </Route>
);

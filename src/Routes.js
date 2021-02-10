import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CoinPage from './components/CoinPage/CoinPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/coin/:coinId" component={CoinPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

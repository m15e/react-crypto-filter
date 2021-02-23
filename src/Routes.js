import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CoinIndex from './components/CoinIndex';
import CoinPage from './containers/CoinPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CoinIndex} />
      <Route path="/coin/:coinId" component={CoinPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CoinIndex from './containers/CoinIndex';
import CoinPage from './components/CoinPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CoinIndex} />
      <Route path="/coin/:coinId" component={CoinPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

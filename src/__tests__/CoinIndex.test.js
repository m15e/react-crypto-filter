import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CoinIndex from '../containers/CoinIndex';

const mockStore = configureStore();

const store = mockStore({
  filter: 'Show All',
  coins: {
    items: [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        current_price: 44497,
        market_cap: 830911434449,
        ath: 48025,
      }],
  },
});

it('CoinIndex matches Snapshot', () => {
  const tree = renderer
    .create(<BrowserRouter><Provider store={store}><CoinIndex /></Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

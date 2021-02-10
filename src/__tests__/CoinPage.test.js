import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CoinPage from '../components/CoinPage';

const mockStore = configureStore();

const store = mockStore({
  coins: {
    item: {
      name: 'Bitcoin',
      symbol: 'XYH',
      image: {
        small: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      },
      description: {
        en: 'All about coins',
      },
      market_data: {
        current_price: {
          usd: 1,
        },
        ath: {
          usd: 1,
        },
        market_cap: {
          usd: 1,
        },
        price_change_percentage_24h: 12,
        price_change_percentage_7d: 12,
        price_change_percentage_30d: 12,
        price_change_percentage_200d: 12,
        price_change_percentage_1y: 12,
      },
    },
  },
});

it('CoinPage matches Snapshot', () => {
  const tree = renderer
    .create(<BrowserRouter><Provider store={store}><CoinPage /></Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

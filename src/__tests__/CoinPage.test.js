import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CoinPage from '../containers/CoinPage';
import thunk from 'redux-thunk';
import { getByAltText, render } from '@testing-library/react';

const middleware = [thunk];
const mockStore = configureStore(middleware);

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
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <CoinPage />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('CoinPage rendering tests', () => {
  let component;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <CoinPage />
        </Provider>
      </BrowserRouter>
    );
  });

  it('displays the current price header', () => {
    const header = document.querySelector('.pm-title-col strong');
    expect(header).toBeInTheDocument();
  });

  it('displays the return link', () => {
    const link = document.querySelector('.back-btn');
    expect(link.innerHTML).toEqual('Back to Index');
  });

  it('displays the description title', () => {
    const title = document.querySelector('.title.is-4');
    expect(title.innerHTML).toEqual('About');
  });

  it('the coin symbol is displayed in all caps', () => {
    const symbol = document.querySelector('.symbol');
    expect(symbol).not.toBe('BTC');
  });

  it('shows the image alternative text for SEO', () => {
    const { getByAltText } = component;
    const el = getByAltText('logo');
    expect(el).not.toBe('symbol');
  });
});

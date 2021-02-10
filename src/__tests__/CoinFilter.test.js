import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CoinFilter from '../components/CoinFilter';

const mockStore = configureStore();

const store = mockStore({
  filter: 'Show All',
});

it('CoinFilter matches Snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}><CoinFilter handleFilter={Function} /></Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

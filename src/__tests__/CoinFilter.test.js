import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import CoinFilter from '../containers/CoinFilter';

const mockStore = configureStore();

const store = mockStore({
  filter: {
    filter: 'Show All',
    search: '',
  },
});

const component = (
  <BrowserRouter>
    <Provider store={store}>
      <CoinFilter handleFilter={Function} handleSearch={Function} />
    </Provider>
  </BrowserRouter>
);

it('CoinFilter matches Snapshot', () => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

it('CoinFilter displays filter element', () => {
  render(component);
  expect(screen.getByText('Show All')).toBeInTheDocument();
});

it('CoinFilter displays proper taxonomy on select', () => {
  render(component);
  fireEvent.change(screen.getByText('Show All'), {
    target: { value: 'Dollar Value' },
  });

  expect(screen.getByText('Dollar Value')).toBeInTheDocument();
});

it('CoinFilter can take search input', () => {
  render(component);

  fireEvent.change(screen.getByPlaceholderText('Enter Coin Name'), {
    target: { value: 'Bitcoin' },
  });

  expect(screen.getByDisplayValue('Bitcoin')).toBeInTheDocument();
});

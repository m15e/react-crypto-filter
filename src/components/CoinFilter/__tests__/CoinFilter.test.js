import React from 'react';
import renderer from 'react-test-renderer';
import CoinFilter from '../CoinFilter';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

it('Coin component matches snapshot', () => {
  const tree = renderer.create(<Provider store={store}><CoinFilter /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
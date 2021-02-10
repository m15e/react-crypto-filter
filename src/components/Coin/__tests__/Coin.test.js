import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Coin from '../Coin';

it('Coin component matches snapshot', () => {
  const tree = renderer.create(<BrowserRouter><Coin /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
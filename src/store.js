import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  coins: {
    items: [],
    item: {},
  },
  filter: {
    filter: 'Show All',
    search: '',
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;

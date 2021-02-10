import { combineReducers } from 'redux';
import coinReducer from './coinReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  coins: coinReducer,
  filter: filterReducer,
});

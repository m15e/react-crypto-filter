import { CHANGE_FILTER, CHANGE_SEARCH } from '../actions/types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;

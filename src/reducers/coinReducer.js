import { FETCH_COINS, GET_COIN } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_COIN:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default coinReducer;

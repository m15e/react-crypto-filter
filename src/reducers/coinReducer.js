import { FETCH_COINS } from "../actions/types";

const initialState = {
  items: [],
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default coinReducer;

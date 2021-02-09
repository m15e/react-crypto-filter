import { CHANGE_FILTER } from "../actions/types";

const filterReducer = (state = "", action) => {
  if (action.type === CHANGE_FILTER) {
    return action.payload;
  }
  return state;
};

export default filterReducer;

import { FETCH_COINS, CHANGE_FILTER } from "./types";

export function fetchCoins() {
  return function (dispatch) {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&price_change_percentage='24h,7d,30d,200d,1y'"
    )
      .then(res => res.json())
      .then(coins => dispatch({ type: FETCH_COINS, payload: coins }));
  };
}

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

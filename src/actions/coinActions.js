import { FETCH_COINS, CHANGE_FILER } from "./types";

export function fetchCoins() {
  return function (dispatch) {
    fetch("https://api.coingecko.com/api/v3/coins/0x/tickers")
      .then(res => res.json())
      .then(coins => dispatch({ type: FETCH_COINS, payload: coins }));
  };
}

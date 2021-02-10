import { FETCH_COINS, CHANGE_FILTER, GET_COIN } from './types';

export const fetchCoins = () => dispatch => fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=30&price_change_percentage='24h,7d,30d,200d,1y'",
)
  .then(res => res.json())
  .then(coins => dispatch({ type: FETCH_COINS, payload: coins }));

export const getCoin = id => dispatch => fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then(res => res.json())
  .then(coin => dispatch({ type: GET_COIN, payload: coin }));

export const changeFilter = filter => dispatch => dispatch({
  type: CHANGE_FILTER,
  payload: filter,
});

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const Coin = props => {
  const {
    id, name, price, marketCap, allTimeHigh, img,
  } = props;

  const price$ = numeral(price).format('$0,0.00');
  const mrktCap$ = numeral(marketCap).format('$0,0.00');
  const allTime$ = numeral(allTimeHigh).format('$0,0.00');

  return (
    <div className="coin tile is-child box is-4" id={id}>
      <figure className="image is-64x64 coin-logo">
        <img className="is-rounded" src={img} alt={name} />
      </figure>
      <h3 className="title is-5">{name}</h3>
      <p>
        <span>Market Capitalization</span>
        <br />
        {mrktCap$}
      </p>
      <p>
        <span>Current Price</span>
        <br />
        {price$}
      </p>
      <p>
        <span>All Time High</span>
        <br />
        {allTime$}
      </p>
      <Link to={`/coin/${id}`} className="view-coin button is-ghost is-small">
        View Coin
      </Link>
    </div>
  );
};

Coin.defaultProps = {
  id: 'coinId',
  name: 'coin',
  price: 1,
  allTimeHigh: 1,
  img: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  marketCap: 1,
};

Coin.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  allTimeHigh: PropTypes.number,
  img: PropTypes.string,
  marketCap: PropTypes.number,
};

export default Coin;

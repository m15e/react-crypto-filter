import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const Coin = props => {
  const {
    id, name, price, market_cap, all_time_high, img,
  } = props;

  const price$ = numeral(price).format('$0,0.00');
  const mrktCap$ = numeral(market_cap).format('$0,0.00');
  const allTime$ = numeral(all_time_high).format('$0,0.00');

  return (
    <div className="coin tile is-child box is-4" id={id}>
      <figure className="image is-64x64 coin-logo">
        <img className="is-rounded" src={img} alt={name} />
      </figure>
      <h3 className="title is-5">{name}</h3>
      <p><span>Market Capitalization</span><br/>{mrktCap$}</p>
      <p><span>Current Price</span><br/>{price$}</p>
      <p><span>All Time High</span><br/>{allTime$}</p>
      <Link to={`/coin/${id}`} className="view-coin button is-ghost is-small">
        View Coin
      </Link>
    </div>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  all_time_high: PropTypes.number.isRequired,  
  img: PropTypes.string.isRequired,
  market_cap: PropTypes.number.isRequired,
};

export default Coin;

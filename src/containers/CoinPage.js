import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoin } from '../actions';

const CoinPage = props => {
  const { coin, getCoin } = props;

  const coinId = window.location.href.split('/coin/').splice(1).toString();

  useEffect(() => {
    getCoin(coinId);
  }, []);

  // calling the API too frequenty can cause an empty object to return
  if (Object.keys(coin).length === 0 && coin.constructor === Object) {
    return (
      <>
        <p>Sorry API Error</p>
        <Link className="back-btn" to="/">
          Back to Home
        </Link>
      </>
    );
  }
  const price$ = numeral(coin.market_data.current_price.usd).format(
    '$0,0.00',
  );
  const mrktCap$ = numeral(coin.market_data.market_cap.usd).format('$0,0.00');
  const allTime$ = numeral(coin.market_data.ath.usd).format('$0,0.00');
  const description = coin.description.en.replace(/(<([^>]+)>)/gi, '');
  const delta24h = coin.market_data.price_change_percentage_24h;
  const delta7d = coin.market_data.price_change_percentage_7d;
  const delta30d = coin.market_data.price_change_percentage_30d;
  const delta200d = coin.market_data.price_change_percentage_200d;
  const delta1y = coin.market_data.price_change_percentage_1y;
  const symbol = coin.symbol.toUpperCase();

  return (
    <div className="coin-page container">
      <div className="columns">
        <div className="column is-8 coin-page-content">
          <div className="columns">
            <div className="column is-6">
              <img src={coin.image.small} alt="logo" />
              <h2 className="title is-3">{coin.name}</h2>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>
                <span>Market Capitalization</span>
                <br />
                {mrktCap$}
              </p>
            </div>
            <div className="column">
              <p>
                <span>Current Price</span>
                <br />
                {price$}
              </p>
            </div>
            <div className="column">
              <p>
                <span>All Time High</span>
                <br />
                {allTime$}
              </p>
            </div>
            <div className="column">
              <p>
                <span>Symbol:</span>
                <br />
                {symbol}
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column pm-title-col">
              <strong>Percent Price Movement</strong>
            </div>
          </div>
          <div className="columns price-movement">
            <div className="column">
              <p>
                <span>24h</span>
                <br />
                {`${delta24h} %`}
              </p>
            </div>
            <div className="column">
              <span>7d</span>
              <br />
              {`${delta7d} %`}
            </div>
            <div className="column">
              <span>30d</span>
              <br />
              {`${delta30d} %`}
            </div>
            <div className="column">
              <span>200d</span>
              <br />
              {`${delta200d} %`}
            </div>
            <div className="column">
              <span>1y</span>
              <br />
              {`${delta1y} %`}
            </div>
          </div>
          <h4 className="title is-4">About</h4>
          <p>{description}</p>
          <Link className="back-btn" to="/">
            Back to Index
          </Link>
        </div>
      </div>
    </div>
  );
};

CoinPage.propTypes = {
  getCoin: PropTypes.func.isRequired,
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }),
    description: PropTypes.shape({
      en: PropTypes.string.isRequired,
    }),
    market_data: PropTypes.shape({
      current_price: PropTypes.shape({
        usd: PropTypes.number.isRequired,
      }),
      ath: PropTypes.shape({
        usd: PropTypes.number.isRequired,
      }),
      market_cap: PropTypes.shape({
        usd: PropTypes.number.isRequired,
      }),
      price_change_percentage_24h: PropTypes.number.isRequired,
      price_change_percentage_7d: PropTypes.number.isRequired,
      price_change_percentage_30d: PropTypes.number.isRequired,
      price_change_percentage_200d: PropTypes.number.isRequired,
      price_change_percentage_1y: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  coin: state.coins.item,
});

const mapDispatchToProps = {
  getCoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);

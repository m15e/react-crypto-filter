import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoins, changeFilter } from '../../actions';
import CoinFilter from '../../components/CoinFilter/CoinFilter';
import Coin from '../../components/Coin/Coin';
import filterMap from '../../helpers/filterMap';

const CoinList = props => {
  const { coins, filter } = props;

  useEffect(() => {
    props.fetchCoins();
  }, []);

  const handleFilter = filter => {
    props.changeFilter(filter);
  };

  const sortBy = filterMap(filter);

  const filteredCoins = filter === 'Show All'
    ? coins
    : coins
      .sort((a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy]))
      .slice(0, 10);

  const coinArr = filteredCoins.map(coin => (
    <Coin
      key={coin.id}
      id={coin.id}
      name={coin.name}
      marketCap={coin.market_cap}
      allTimeHigh={coin.ath}
      price={coin.current_price}
      img={coin.image}
    />
  ));

  return (
    <div className="coinList container">
      <CoinFilter handleFilter={handleFilter} />
      <div className="coin-container">{coinArr}</div>
    </div>
  );
};

CoinList.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  coins: state.coins.items,
  filter: state.filter,
});

const mapDispatchToProps = {
  fetchCoins,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);

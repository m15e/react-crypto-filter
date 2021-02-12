import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoins, changeFilter, changeSearch } from '../actions';
import CoinFilter from './CoinFilter';
import Coin from '../components/Coin';
import filterMap from '../helpers/filterMap';

const CoinList = props => {
  const { coins, filter } = props;

  useEffect(() => {
    props.fetchCoins();
  }, [props]);

  const handleFilter = filter => {
    props.changeFilter(filter);
  };

  const sortBy = filterMap(filter);

  const filteredCoins =
    filter.filter === 'Show All'
      ? coins
      : coins
          .sort((a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy]))
          .slice(0, 10);

  const handleSearch = search => {
    props.changeSearch(search);
  };

  const searchedCoins =
    filter.search.length === 0
      ? filteredCoins
      : filteredCoins.filter(coin => coin.id.includes(filter.search));

  const coinArr = searchedCoins.map(coin => (
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
      <CoinFilter handleFilter={handleFilter} handleSearch={handleSearch} />
      <div className="coin-container">{coinArr}</div>
    </div>
  );
};

CoinList.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  changeSearch: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    filter: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  coins: state.coins.items,
  filter: state.filter,
});

const mapDispatchToProps = {
  fetchCoins,
  changeFilter,
  changeSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);

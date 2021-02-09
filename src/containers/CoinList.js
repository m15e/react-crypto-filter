import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCoins, changeFilter } from "../actions";
import CoinFilter from "../components/CoinFilter";
import Coin from "../components/Coin";
import filterMap from "../helpers/filterMap";

export const CoinList = props => {
  const { coins, changeFilter, filter } = props;

  useEffect(() => {
    props.fetchCoins();
  }, []);

  const handleFilter = filter => {
    console.log(`filter: ${filter}`);
    props.changeFilter(filter);

    console.log(filter);
  };

  const sortBy = filterMap(filter);

  const filteredCoins =
    filter === "Show All"
      ? coins
      : coins
          .sort((a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy]))
          .slice(0, 10);

  console.log(filteredCoins);

  const coinArr = filteredCoins.map(coin => (
    <Coin
      key={coin.id}
      id={coin.id}
      name={coin.name}
      price={coin.current_price}
      img={coin.image}
    />
  ));

  return (
    <div className="coinList container">
      <h3>CoinList</h3>
      <CoinFilter handleFilter={handleFilter} />
      <div className="coin-container">{coinArr}</div>
    </div>
  );
};

// CoinList.propTypes = {
//   fetchCoins: PropTypes.func.isRequired,
//   coins: PropTypes.array.isRequired,
// };

const mapStateToProps = state => ({
  coins: state.coins.items,
  filter: state.filter,
});

const mapDispatchToProps = {
  fetchCoins,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCoins, changeFilter } from "../actions";
import CoinFilter from "../components/CoinFilter";
import Coin from "../components/Coin";

export const CoinList = props => {
  const { coins, changeFilter } = props;

  useEffect(() => {
    props.fetchCoins();
  }, []);

  // console.log(coins);

  const handleFilter = filter => {
    props.changeFilter(filter);
    console.log(filter);
  };

  const coinArr = coins.map(coin => (
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinList); // add { fetchCoins, mapDispatchToProps } here later

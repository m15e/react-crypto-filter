import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCoins } from "../actions";
import CoinFilter from "../components/CoinFilter";
import Coin from "../components/Coin";

export const CoinList = props => {
  const { coins } = props;

  useEffect(() => {
    props.fetchCoins();
  }, []);

  console.log(coins);

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
    <div>
      <h3>CoinList</h3>
      <CoinFilter />
      {coinArr}
    </div>
  );
};

// CoinList.propTypes = {
//   fetchCoins: PropTypes.func.isRequired,
//   coins: PropTypes.array.isRequired,
// };

const mapStateToProps = state => ({
  coins: state.coins.items,
});

export default connect(mapStateToProps, { fetchCoins })(CoinList);

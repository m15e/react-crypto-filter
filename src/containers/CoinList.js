import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCoins } from "../actions/coinActions";

export const CoinList = props => {
  useEffect(() => {
    props.fetchCoins();
  }, []);

  console.log(props.coins);

  return (
    <div>
      <h3>List</h3>
    </div>
  );
};

// CoinList.propTypes = {
//   fetchCoins: PropTypes.func.isRequired,
//   coins: PropTypes.array.isRequired,
// };

const mapStateToProps = state => ({
  items: state.coins.items,
});

export default connect(mapStateToProps, { fetchCoins })(CoinList);

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getCoin } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CoinPage = props => {
  const { coin, getCoin } = props;

  const coin_id = window.location.href.split("/coin/").splice(1).toString();

  useEffect(() => {
    props.getCoin(coin_id);
  }, []);

  return (
    <div className="coin-page">
      <p>{coin.symbol}</p>
      <Link exact to="/">
        Back
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  coin: state.coins.item,
});

const mapDispatchToProps = {
  getCoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);

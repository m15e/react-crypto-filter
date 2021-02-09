import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Coin = props => {
  const { id, name, price, img } = props;
  return (
    <div className="coin tile is-child box is-4" id={id}>
      <figure className="image is-64x64 coin-logo">
        <img className="is-rounded" src={img} alt={name} />
      </figure>
      <h3>{name}</h3>
      <p>{price}</p>
      <Link to={`/coin/${id}`} className="button is-ghost is-small">
        View Coin
      </Link>
    </div>
  );
};

export default Coin;

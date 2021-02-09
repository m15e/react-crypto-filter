import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Coin = props => {
  const { id, name, price, img } = props;
  return (
    <div className="coin" id={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Coin;

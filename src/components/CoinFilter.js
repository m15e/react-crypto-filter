import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CoinFilter = props => {
  const { handleFilterChange, filter } = props;

  const filters = [
    "Market Cap",
    "Dollar Value",
    "All Time High",
    "24h Price Change",
  ];

  return (
    <>
      <p>Filter Top 10 by:</p>
      <select name="coinFilter">
        <option value="All">All</option>
        {filters.map(filter => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </>
  );
};

export default CoinFilter;

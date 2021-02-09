import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CoinFilter = props => {
  const { handleFilter, filter } = props;

  const filters = [
    "Market Cap",
    "Dollar Value",
    "All Time High",
    "24h Price Change",
  ];

  useEffect(() => {}, [filter]);

  return (
    <>
      <p>Filter Top 10 by:</p>
      <select name="coinFilter" onChange={e => handleFilter(e.target.value)}>
        <option value="All">All</option>
        {filters.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(CoinFilter);

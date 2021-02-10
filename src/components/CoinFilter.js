import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CoinFilter = props => {
  const { handleFilter, filter } = props;

  const filters = ["Market Cap", "Dollar Value", "All Time High"];

  useEffect(() => {}, [filter]);

  return (
    <div className="container filter-container">
      <div className="columns">
        <div className="column">
          <p>Filter Top 10 by:</p>
        </div>
        <div className="column">
          <select
            name="coinFilter"
            onChange={e => handleFilter(e.target.value)}
          >
            <option value="Show All">Show All</option>
            {filters.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

CoinFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(CoinFilter);

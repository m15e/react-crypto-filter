const filterMap = filter => {
  const mapping = {
    "Dollar Value": "current_price",
    "Market Cap": "market_cap",
    "All Time High": "ath",
    "24h Price Change": "price_change_24h",
  };

  return mapping[filter];
};

export default filterMap;

import React from 'react';
import CryptoChart from './CryptoChart';

const Charts = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    prices: [100, 120, 90, 150, 130],
  };

  return (
    <div>
      <CryptoChart data={chartData} />
    </div>
  );
};

export default Charts;

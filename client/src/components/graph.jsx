/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styles from '../styles/Graph.css';
import GraphConstructor from './GraphConstructor';
import StockHeader from './StockHeader';

const Graph = (props) => {
  const {
    data, companyName, displayPrice, handleChartHover, handleChartLeave,
  } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.stockValueGraph}>
        <GraphConstructor
          data={data}
          handleChartHover={handleChartHover}
          handleChartLeave={handleChartLeave}
        />
      </div>
      <StockHeader
        data={data}
        companyName={companyName}
        displayPrice={displayPrice}
      />
    </div>
  );
};

export default Graph;

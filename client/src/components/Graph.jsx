/* eslint-disable react/forbid-prop-types */
import React from 'react';
import openStyles from '../styles/GraphOpen.css';
import closeStyles from '../styles/GraphClose.css';
import GraphConstructor from './GraphConstructor';
import StockHeader from './StockHeader';

const Graph = (props) => {
  const {
    data, companyName, displayPrice, marketOpen, handleChartHover, handleChartLeave,
  } = props;
  const styles = (marketOpen ? openStyles : closeStyles);
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

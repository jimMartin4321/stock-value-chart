import React from 'react';
import styles from '../styles/StockHeader.css';


const StockHeader = (props) => {
  const { data, companyName } = props;
  if (data.length) {
    return (
      <div className={styles.priceDisplay}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.price} id="price">
          $
          {data[data.length - 1].price}
        </div>
      </div>
    );
  }
  return '';
};

export default StockHeader;

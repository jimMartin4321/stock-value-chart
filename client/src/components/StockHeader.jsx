import React from 'react';
import AnimatedNumber from 'react-animated-number';
import openStyles from '../styles/marketOpen/StockHeader.css';
import closedStyles from '../styles/marketClose/StockHeader.css';

const StockHeader = (props) => {
  const {
    data,
    companyName,
    displayPrice,
    marketOpen,
  } = props;
  const styles = (marketOpen ? openStyles : closedStyles);
  if (data.length) {
    return (
      <div className={styles.priceDisplay}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.price} id="price">
          <AnimatedNumber
            duration={750}
            stepPrecision={2}
            style={{
              transition: '3.0s ease-out',
              transitionProperty:
                'background-color, color, opacity',
            }}
            frameStyle={perc => (
              perc === 100 ? {} : { opacity: 1 }
            )}
            value={displayPrice}
            formatValue={n => '$'.concat(n.toString())}
          />
        </div>
      </div>
    );
  }
  return '';
};

export default StockHeader;

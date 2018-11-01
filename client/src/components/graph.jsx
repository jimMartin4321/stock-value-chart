/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Graph.css';
import GraphConstructor from './GraphConstructor';

const priceHover = (event) => {
  if (event.activePayload) {
    const { price } = event.activePayload[0].payload;
    document.getElementById('price').innerHTML = price.toString();
  }
};

class Graph extends React.Component {
  priceReset() {
    const endPrice = this.data[this.data.length - 1].price;
    document.getElementById('price').innerHTML = endPrice.toString();
  }

  graphCreation() {
    const { data } = this.props;
    if (data.length) {
      const openingPrice = data[0].price;
      return (
        // eslint-disable-next-line max-len
        <GraphConstructor data={data} openingPrice={openingPrice} priceReset={this.priceReset} priceHover={priceHover} />
      );
    }
    return '';
  }

  priceDisp() {
    const { data } = this.props;
    if (data.length) {
      const { companyName } = this.props;
      return (
        <div className={styles.priceDisplay}>
          <div className={styles.companyName}>{companyName}</div>
          <div className={styles.price} id="price">{data[data.length - 1].price}</div>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.stockValueGraph}>
          {this.graphCreation()}
        </div>
        {this.priceDisp()}
      </div>
    );
  }
}

Graph.defaultProps = {
  data: [],
};

Graph.propTypes = {
  data: PropTypes.array,
};

export default Graph;

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Graph.css';
import GraphConstructor from './GraphConstructor';
import StockHeader from './StockHeader';

const priceHover = (event) => {
  if (event.activePayload) {
    const { price } = event.activePayload[0].payload;
    document.getElementById('price').innerHTML = ('$').concat(price.toString());
  }
};

class Graph extends React.Component {
  priceReset() {
    const endPrice = this.data[this.data.length - 1].price;
    document.getElementById('price').innerHTML = ('$').concat(endPrice.toString());
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

  render() {
    const { data } = this.props;
    const { companyName } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.stockValueGraph}>
          {this.graphCreation()}
        </div>
        {<StockHeader data={data} companyName={companyName} />}
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

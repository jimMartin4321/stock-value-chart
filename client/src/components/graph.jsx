import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  definePricePoints() {
    let line = '';
    let xPos = 0;
    const yAxisMidpoint = (document.getElementById('App').clientHeight * 6/10) / 2;
    const priceOffSet = this.props.data[0].price;
    this.props.data.forEach(price => {
      const yPos = yAxisMidpoint + ((priceOffSet - price.price) * 4);
      line += `${xPos},${yPos} `;
      xPos += 8;
    });
    return line;
  }

  graphCreation() {
    if (this.props.data.length) {
      return (
        <svg className="chart">
          <polyline
            fill="none"
            stroke="#0074d9"
            strokeWidth="1.25"
            points={this.definePricePoints()} />
        </svg>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="stockValueGraph">
        {this.graphCreation()}
      </div>
    );
  }
}

export default Graph;

// { this.definePricePoints() }
import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  definePricePoints() {
    let line = '';
    let xPos = 0;
    this.props.data.forEach(price => {
      line+= xPos + "," + (price.price % 100)  +  " ";
      xPos += 4.2;
    });
    line = line.slice(0, -1);
    return line;
  }

  graphCreation() {
    if (this.props.data.length) {
      const points = this.definePricePoints();
      return (
        <svg viewBox="0 0 500 100" className="chart">
          <polyline
            fill="none"
            stroke="#0074d9"
            strokeWidth="1"
            points={points} />
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
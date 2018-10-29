import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  pricePoints() {
    let line = '';
    let xPos = 0;
    const yAxisMidPoint = (document.getElementById('App').clientHeight * 6/10) / 2;
    const priceOffSet = this.props.data[0].price;
    this.props.data.forEach(price => {
      const yPos = yAxisMidPoint + ((priceOffSet - price.price) * 4);
      line += `${xPos},${yPos} `;
      xPos += 8;
    });
    return line;
  }

  middleLine() {
    const yAxisMidPoint = (document.getElementById('App').clientHeight * 6 / 10) / 2;
    const xAxisEndPoint = document.getElementById('App').clientWidth;
    return `0,${yAxisMidPoint} ${xAxisEndPoint},${yAxisMidPoint}`;
  }

  

  graphCreation() {
    if (this.props.data.length) {
      return (
        <svg className="chart">
          <polyline
            fill="none"
            stroke="#0074d9"
            strokeWidth="2"
            points={this.pricePoints()} 
          />
          <polyline
            fill="none"
            stroke="#D3D3D3"
            strokeWidth="3"
            strokeDasharray="1, 10"
            strokeLinecap="round"
            points={this.middleLine()}
          />
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
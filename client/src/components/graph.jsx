import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, ReferenceLine, Tooltip } from 'recharts';
import CustomToolTip from './CustomToolTip.jsx';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    let data;
  }

  priceData() {
    let data = this.props.data.slice();
    let time = 0;
    data.forEach( (priceElem) => {
      priceElem.time = time;
      time += 5;
    });
    return data;
  }

  priceHover(event) {
    if (event.activePayload) {
      const price = event.activePayload[0].payload.price;
      return (document.getElementById('price').innerHTML = '' + price);
    }
    return null;
  }

  priceReset() {
    document.getElementById('price').innerHTML = '' + this.data[this.data.length-1].price;
  }

  graphCreation() {
    if (this.props.data.length) {
      this.data = this.data || this.props.data;
      const openingPrice = this.data[0].price;

      return (
        <ResponsiveContainer className="chart" width='100%' height='100%'>
          <LineChart onMouseMove={(e) => {this.priceHover(e) }} onMouseLeave={() => {this.priceReset()}} className="chart" width={document.getElementById('App').clientWidth} height={document.getElementById('App').clientHeight * 6 / 10} data={this.data}>
            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true}/>
            <XAxis dataKey="time" hide={true}/>
            <Tooltip content={<CustomToolTip/>}/>
            <ReferenceLine y={openingPrice} stroke="black" strokeDasharray="1 8"/>
            <Line type="monotone" dataKey="price" width="5" stroke="#30CD9A" dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      );
    }
    return '';
  }

  priceDisp() {
    if (this.props.data.length) {
      return (
        <div className="priceDisplay">
          <div id="companyName">{this.props.companyName}</div>
          <div id="price">{this.data[this.data.length-1].price}</div>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div id="wrapper">
        <div className="stockValueGraph">
          {this.graphCreation()}
        </div>
        {this.priceDisp()}
      </div>
    );
  }
}

export default Graph;
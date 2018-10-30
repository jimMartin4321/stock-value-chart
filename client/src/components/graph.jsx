import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, ReferenceLine, Tooltip } from 'recharts';
import CustomToolTip from './CustomToolTip.jsx';

class Graph extends React.Component {
  constructor(props) {
    super(props);
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
  

  graphCreation() {
    if (this.props.data.length) {
      const data = this.priceData();
      const openingPrice = data[0].price;

      return (
        <ResponsiveContainer className="chart" width='100%' height='100%'>
          <LineChart className="chart" width={document.getElementById('App').clientWidth} height={document.getElementById('App').clientHeight * 6 / 10} data={data}>
            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true}/>
            <XAxis dataKey="time" hide={true}/>
            <Tooltip content={<CustomToolTip time={data.time}/>}/>
            <ReferenceLine y={openingPrice} stroke="black" strokeDasharray="1 8"/>
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
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
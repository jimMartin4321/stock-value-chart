import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, ReferenceLine, Tooltip } from 'recharts';
import CustomToolTip from './CustomToolTip.jsx';
import styles from '../styles/Graph.css';
import GraphConstructor from './GraphConstructor.jsx';

class Graph extends React.Component {
  constructor(props) {
    super(props);
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
        //necessary props: data

        <GraphConstructor data={this.data} openingPrice={openingPrice} priceReset={this.priceReset} priceHover={this.priceHover} />

        // <ResponsiveContainer className={styles.chart} width='100%' height='100%'>
        //   <LineChart onMouseMove={(e) => {this.priceHover(e) }} onMouseLeave={() => {this.priceReset()}} className="chart" width={document.getElementById('App').clientWidth} height={document.getElementById('App').clientHeight * 6 / 10} >
        //     <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
        //     <XAxis dataKey="id" type="number" domain={[0, 78]} hide={true} />
        //     <Tooltip content={<CustomToolTip/>}/>
        //     <ReferenceLine y={openingPrice} stroke="black" strokeDasharray="1 8"/>
        //     <Line type="monotone" dataKey="price" data={this.data} width={1} stroke="#30CD9A" dot={false}/>
        //   </LineChart>
        // </ResponsiveContainer>
      );
    }
    return '';
  }

  priceDisp() {
    if (this.props.data.length) {
      return (
        <div className={styles.priceDisplay}>
          <div className={styles.companyName}>{this.props.companyName}</div>
          <div className={styles.price} id="price">{this.data[this.data.length-1].price}</div>
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

export default Graph;
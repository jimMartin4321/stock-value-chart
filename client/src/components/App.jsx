import React from 'react';
import path from 'path';
import moment from 'moment';
import Graph from './Graph';

const timeUpdate = jsonData => (
  jsonData.map((stockObj, index) => ({
    price: stockObj.price,
    time: moment(stockObj.dateTime).format('h:mm A').concat(' ET'),
    id: index,
    marketOpen: false,
  }))
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      companyName: undefined,
      displayPrice: 0,
    };
    this.handleChartHover = this.handleChartHover.bind(this);
    this.handleChartLeave = this.handleChartLeave.bind(this);
  }

  componentDidMount() {
    fetch(path.join(__dirname, '/stocks/1'))
      .then(res => res.json())
      .then((jsonData) => {
        const data = timeUpdate(jsonData);
        const displayPrice = data[data.length - 1].price;
        this.setState({ data, displayPrice });
      });
    fetch(path.join(__dirname, '/companies/1'))
      .then(res => res.json())
      .then((jsonData) => {
        const companyName = jsonData[0].name;
        this.setState({ companyName });
      });
  }

  handleChartHover(event) {
    if (event.activePayload) {
      const { price } = event.activePayload[0].payload;
      this.setState({
        displayPrice: price,
      });
    }
  }

  handleChartLeave() {
    const { data } = this.state;
    const currentMarketPrice = data[data.length - 1].price;
    this.setState({
      displayPrice: currentMarketPrice,
    });
  }

  render() {
    const { data, companyName, displayPrice } = this.state;
    if (data.length) {
      return (
        <Graph
          data={data}
          companyName={companyName}
          displayPrice={displayPrice}
          handleChartHover={this.handleChartHover}
          handleChartLeave={this.handleChartLeave}
        />
      );
    }
    return '';
  }
}

export default App;

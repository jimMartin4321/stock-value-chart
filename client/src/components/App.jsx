import React from 'react';
import path from 'path';
import moment from 'moment-timezone';
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
      marketOpen: true,
    };
    this.handleChartHover = this.handleChartHover.bind(this);
    this.handleChartLeave = this.handleChartLeave.bind(this);
    this.marketOpenCheck = this.marketOpenCheck.bind(this);
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
    this.marketOpenCheck();
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

  marketOpenCheck() {
    moment.tz.add('America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0');
    const currentTime = moment().tz('America/New_York');
    const open = moment().tz('America/New_York')
      .hour(9)
      .minute(30)
      .second(0)
      .millisecond(0);
    const close = moment().tz('America / New_York')
      .hour(16)
      .minute(0)
      .second(0)
      .millisecond(0);
    this.setState({
      marketOpen: currentTime.isBetween(open, close),
    });
    setTimeout(() => this.marketOpenCheck, 1000);
  }

  render() {
    const {
      data,
      companyName,
      displayPrice,
      marketOpen,
    } = this.state;
    if (data.length) {
      return (
        <Graph
          data={data}
          companyName={companyName}
          displayPrice={displayPrice}
          marketOpen={marketOpen}
          handleChartHover={this.handleChartHover}
          handleChartLeave={this.handleChartLeave}
        />
      );
    }
    return '';
  }
}

export default App;

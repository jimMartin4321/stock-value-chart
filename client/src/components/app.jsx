import React from 'react';
import path from 'path';
import moment from 'moment';
import Graph from './Graph';

const timeUpdate = jsonData => (
  jsonData.map((stockObj, index) => ({
    price: stockObj.price,
    time: moment(stockObj.dateTime).format('h:mm A').concat(' ET'),
    id: index,
  }))
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      companyName: undefined,
      displayPrice: undefined,
    };
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

  render() {
    const { data, companyName, displayPrice } = this.state;
    return (
      <Graph data={data} companyName={companyName} displayPrice={displayPrice} />
    );
  }
}

export default App;

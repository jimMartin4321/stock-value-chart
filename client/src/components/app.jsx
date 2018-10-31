import React from 'react';
import Graph from './graph.jsx';
import path from 'path';
import moment from 'moment';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      companyName: undefined,
    };
  }

  timeUpdate(jsonData) {
    return jsonData.map( (stockObj) => {
      let time = moment(stockObj.dateTime).format('h: mm A');
      return {
        price: stockObj.price,
        time: time,
      };
    });
  }

  componentDidMount() {
    fetch(path.join(__dirname, '/stocks/1'))
      .then( (res) => {
        return res.json();
      }).then( (jsonData) => {
        let formattedData = this.timeUpdate(jsonData);
        this.setState({ 
          data: formattedData
        });
      });
    fetch(path.join(__dirname, '/companies/1'))
      .then( (res) => {
        return res.json();
      }).then( (jsonData) => {
        const companyName = jsonData[0].name;
        this.setState({
          companyName: companyName
        });
      });
  }

  render() {
    return (
      <Graph data={this.state.data} companyName={this.state.companyName}/>
    );
  }
}

export default App;
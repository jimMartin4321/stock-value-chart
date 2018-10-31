import React from 'react';
import Graph from './graph.jsx';
import path from 'path';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      companyName: undefined,
    };
  }

  componentDidMount() {
    fetch(path.join(__dirname, '/stocks/1'))
      .then( (res) => {
        return res.json();
      }).then( (jsonData) => {
        this.setState({ 
          data: jsonData
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
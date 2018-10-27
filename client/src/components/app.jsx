import React from 'react';
import Graph from './graph.jsx';
import path from 'path';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(path.join(__dirname, '/stocks/1'))
      .then( (res) => {
        console.log('we have fetched!!');
        let data = res.json();
        this.setState({data: data});
      });
  }

  render() {
    return (
      <div>
        <Graph data={this.state.data}/>
      </div>
    );
  }
}

export default App;
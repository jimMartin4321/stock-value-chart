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
    console.log('component mounted!');
    fetch(path.join(__dirname, '/stocks/1'))
      .then( (res) => {
        this.setState({data: res.body});
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
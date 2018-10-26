import React from 'react';
import Graph from './graph.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData() {
    
  }

  render() {
    return (
      <div>
        <Graph data={data}/>
      </div>
    );
  }
}

export default App;
import React from 'react';
import List from './components/List.js';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="app">
        <div className="list-container">
          <List title="Programming Language List"/>
        </div>
      </div>
    );
  }

}

export default App;

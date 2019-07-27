import React from 'react';
import List from './components/List.js';
import ListModal from './components/ListModal.js';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  render () {
    return (
      <div className="app">
        <div className="list-container">
          <List
            title={"Programming Language List"}
            openModal={this.openModal.bind(this)}/>
        </div>
        { this.renderModal() }
      </div>
    );
  }

  renderModal () {
    if (this.state.isModalOpen)
    {
      return (
        <ListModal
          title={"Add new programming language"}
          subtitle={"Programming language"}
          closeModal={this.closeModal.bind(this)}/>
      );
    }
    else
    {
      return (<span style={{display: 'none'}}/>);
    }
  }

  openModal () {
    this.setState({
      isModalOpen: true
    });
  }
  
  closeModal () {
    this.setState({
      isModalOpen: false
    });
  }

}

export default App;

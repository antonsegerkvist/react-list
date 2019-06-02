import React from 'react';
import ListItem from './ListItem';
import './List.css';

class List extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      errorMessage: '',
      items: []
    };
  }

  render () {
    return (
      <div className="list">
        <div className="header">
          <span className="title">{this.title}</span>
        </div>
        { this.body }
        <div className="footer">
          <div onClick={this.addListItem} className="adder">
          </div>
          <div className="delete">
          </div>
        </div>
      </div>
    );
  }

  componentWillMount () {
    this.fetchLinks();
  }

  fetchLinks () {
    this.setState({ loaded: false });
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        switch (xhr.status) {
          case 200:
            try {
              let json = JSON.parse(xhr.responseText);
              this.setState({
                loaded: true,
                error: false,
                errorMessage: '',
                items: json
              });
            } catch (e) {
              this.setState({
                loaded: true,
                error: true,
                errorMessage: 'Bad JSON response',
                items: []
              });
            }
            break;
          default:
            this.setState({
              loaded: true,
              error: true,
              errorMessage: 'Unknown error'
            });
            break;
        }
      }
    };
    xhr.open('GET', '/api/list');
    xhr.send();
  }

  addListItem () {
    console.log('Add a single item.');
  }

  get title () {
    return this.props.title ? this.props.title : 'Undefined title'
  }

  get body () {
    if (this.state.loaded === false) {
      return (
        <div className="body">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else if (this.state.loaded === true && this.state.error === false) {
      return (
        <div className="body">
          { this.listDOM }
        </div>
      );
    } else {
      return (
        <div className="body">
          <span className="error-message">
            { this.state.errorMessage }
          </span>
        </div>
      );
    }
  }

  get listDOM () {
    return this.state.items.map(item => {
      return (<ListItem key={item.id} title={item.title}/>)
    });
  }

}

export default List;
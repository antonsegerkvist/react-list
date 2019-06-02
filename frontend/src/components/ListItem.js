import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render () {
    return (
      <div className="list-item">
        <span className="title">{this.title}</span>
      </div>
    );
  }

  get title () {
    return this.props.title ? this.props.title : '';
  }

}

export default ListItem;
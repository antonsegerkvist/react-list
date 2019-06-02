import React from 'react';
import './ListModal.css';

export default class ListModal extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="list-modal">
        <div className="window">
        </div>
      </div>
    );
  }

}
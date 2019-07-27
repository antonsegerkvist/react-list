import React from 'react';
import PropTypes from 'prop-types';
import './ListModal.css';

export default class ListModal extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="list-modal">
        <div className="window">
          <div className="header">
            {this.props.title}
          </div>
          <div className="body">
            {this.props.subtitle}
            <label className="label">
              <input className="input" type="text"/>
            </label>
          </div>
          <div className="footer">
          </div>
        </div>
      </div>
    );
  }

}
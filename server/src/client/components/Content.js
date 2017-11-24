import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    const mail = this.props.activeMail;
    return (
      <div className="content">
        <h2 className="header" id="title">Your Emails</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
        </div>
          <div className="card-stacked">
            <div className="card-content">
              <p id="message">{mail.message}</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn">Answer</a>
              <a className="waves-effect waves-light btn red lighten-2">Delete</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({activeMail}) => ({
  activeMail
})

export default connect(mapStateToProps)(Content);
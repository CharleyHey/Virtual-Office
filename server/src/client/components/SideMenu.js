import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActiveMail, fetchMails } from '../actions';
import Mails from '../../dummyData/mails';

class SideMenu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      timeLeft: 300
    }
  }


  componentDidMount() {
    const interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    const { timeLeft } = this.state;
    this.setState({ timeLeft: timeLeft - 1 })
    this.checkTime(timeLeft);
    if (timeLeft === 0) {
      renderAnsweredMails();
      clearInterval(interval);
    } else {
      null;
    }
  }

  checkTime(time) {
    const { fetchMails } = this.props;

    Mails.forEach(element => {
      if (time === element.time) {
        fetchMails(element);
      }
      else { null; }
    })
  }


  setActiveMail(mail) {
    this.props.fetchActiveMail(mail);
  }

  renderMails() {
    const { mailList, activeMail } = this.props;
    return mailList.map(mail => {
      return (<li
        className={mail.id === activeMail.id ? "collection-item active" : "collection-item"}
        key={mail.id}
        onClick={() => this.setActiveMail(mail)}
      >{mail.message}</li>);
    });
    console.log(this.props.activeMail);
  }

  render() {
    return (
      <div className="sidemenu">
        <ul className="collection" id="eMailList">
          {this.renderMails()}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = ({ activeMail, mailList }) => ({
  activeMail,
  mailList
})

export default connect(mapStateToProps, { fetchActiveMail, fetchMails })(SideMenu);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import Content from '../components/Content';
import requireAuth from '../components/hocs/requireAuth';

class EmailToolPage extends Component {


  render() {
    return (
      <div className="myRow">
      <SideMenu />
      <Content />
      </div>
    )
  }
}


export default {
  component: EmailToolPage
}
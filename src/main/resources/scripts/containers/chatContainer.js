'use strict';

import React, {Component, PropTypes} from 'react';
import Chat from '../components/chat';
import {connect} from 'react-redux';

class ChatContainer extends Component {
  render() {
    return (<Chat {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {user: {username, session, friends, userType}} = state;
  return {
  	username,
  	session,
  	friends,
  	userType
  }
}

export default connect(mapStateToProps)(ChatContainer);
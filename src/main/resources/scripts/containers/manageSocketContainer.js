'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ManageSiteNav from '../components/manageSiteNav';

class ManageSocket extends Component {
  render() {
  	return (<ManageSiteNav {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {socket:{sockets, isFetching, validate, investTime},
   user: {userType}} = state;
  return {
  	sockets,
  	userType,
  	isFetching,
    validate,
    investTime
  }
}

export default connect(mapStateToProps)(ManageSocket)
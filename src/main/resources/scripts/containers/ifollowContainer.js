'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Ifollow from '../components/ifollow';

class IfollowContainer extends Component {
  render() {
  	return (<Ifollow {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {news: {isFetching, validate, newsType, news, error}} = state;
  const followers = newsType === 'ifollowers' ? news : [];
  return {
  	isFetching, 
  	validate, 
  	newsType, 
  	followers, 
  	error
  };
}

export default connect(mapStateToProps)(IfollowContainer);
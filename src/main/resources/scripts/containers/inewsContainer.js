'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Inews from '../components/inews';

class InewsContainer extends Component {
  render() {
  	return (<Inews {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {news: {newsType, news, isFetching, validate}} = state;
  const inews = newsType === 'inews' ? news : [];
  return {
  	newsType, 
  	inews, 
  	isFetching,
  	validate
  };
}

export default connect(mapStateToProps)(InewsContainer);
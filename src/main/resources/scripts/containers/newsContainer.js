'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NewsCenter from '../components/newsCenter';

class NewsContainer extends Component {
  render() {
  	return (<NewsCenter {...this.props}/>)
  }
}

function mapStateToProps(state) {
  const {news: {items, isFetching, validate, error, news}} = state;
  return {
  	items, 
  	isFetching, 
  	validate, 
  	error,
  	news
  }
}

export default connect(mapStateToProps)(NewsContainer)